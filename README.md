# hubot-lingif

A [Hubot](http://hubot.github.com) script listening to lingif commands and sends back a @linagora related GIF.

## Install

- Install via npm

```
npm install hubot-lingif --save
```

- Add the following code in your external-scripts.json file.

```
["hubot-lingif"]
```

- Run hubot

```
bin/hubot
```

## Usage

Hubot can now hear, respond to messages:

```
hubot> hubot lingif luc
hubot> http://i.giphy.com/26xBSVNCBZtXCOGOc.gif
```

![luc](http://i.giphy.com/26xBSVNCBZtXCOGOc.gif)

```
hubot> lingif chamerling
hubot> http://i.giphy.com/26xBOP3ddkaXEIqys.gif
```

![chamerling](http://i.giphy.com/26xBOP3ddkaXEIqys.gif)


## Add you GIF

Update the db.json file by adding your GIF(s) and send a PR. Use CSV to define the keys Hubot can reply to. The format is like:

```
"firstname,lastname,fullname,login,trigram,whatever": ["http://your.gif"]
```

## License

(The MIT License)

Copyright (c) 2017 Christophe Hamerling <chamerling@linagora.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
