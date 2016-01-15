# sparkly-cli [![Build Status](https://travis-ci.org/sindresorhus/sparkly-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/sparkly-cli)

> Generate sparklines ▁▂▃▅▂▇

<img src="https://github.com/sindresorhus/sparkly/raw/master/screenshot.png" width="383">

[Some cool use-cases.](https://github.com/holman/spark/wiki/Wicked-Cool-Usage)


## Install

```
$ npm install --global sparkly-cli
```


## Usage

```
$ sparkly --help

  Usage
    $ sparkly <number> [...]
    $ echo <number> [...] | sparkly

  Options
    --min    Minimum range
    --max    Maximum range
    --style  Style for the sparklines [Values: fire]

  Examples
    $ sparkly 0 3 5 8 4 3 4 10
    ▁▃▄▅▃▃▃▆
    $ sparkly --min=0 --max=10 1 2 3 4 5
    ▁▂▃▄▄
    $ sparkly --style=fire 1 2 3 4 5 6 7 8
    ▁▂▂▃▃▄▄▅
    $ echo 0 3 5 8 4 3 | sparkly
    ▁▂▃▅▃▂
```


## Related

- [sparkly](https://github.com/sindresorhus/sparkly) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
