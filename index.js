const _ = require('lodash');
const fs = require('fs');
const DB_URL = 'https://raw.githubusercontent.com/chamerling/hubot-lingif/master/db.json';
const DEFAULT_GIF = 'http://i.giphy.com/QHKMjJN1sG2sw.gif';

module.exports = (robot) => {

  robot.hear(/lingif (.*)$/i, getGif);
  robot.respond(/lingif (.*)$/i, getGif);

  function getGif(msg) {
    get(msg.match[1])
      .then(gif => {
        robot.logger.debug(`gif result to ${msg.match[1]} is ${gif}`);
        msg.send(gif);
      })
      .catch(err => {
        robot.logger.debug(err)
        msg.send(`:kader: is always here for you, even when bot fails ${DEFAULT_GIF}`);
      });
  }

  function get(text) {
    return load().then(data => {
      if (!data[text] || !data[text].length) {
        throw new Error(`Can not find matching result for ${text}`);
      }

      return _.sample(data[text]);
    });
  }

  function load() {
    return loadRemoteDatabase()
      .catch(err => {
        robot.logger.error(err);

        return loadLocalDatabase();
      });
  }

  function loadLocalDatabase() {
    const promise = new Promise((resolve, reject) => {
      fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(data));
      });
    });

    return promise;
  }

  function loadRemoteDatabase() {
    const promise = new Promise((resolve, reject) => {
      robot
        .http(DB_URL)
        .header('Accept', 'application/json')
        .get()((err, res, body) => {
          if (body) {
            const db = parseDB(JSON.parse(body));

            return resolve(db);
          }

          reject(err);
        });
    });

    return promise;
  }

  function parseDB(json) {
    const result = {};
    _.forEach(json, (value, key) => {
      _.map(key.split(','), _.trim).forEach(key => {
        if (!result[key]) {
          result[key] = [];
        }

        result[key] = _.concat(result[key], value);
      });
    });

    return result;
  }
};
