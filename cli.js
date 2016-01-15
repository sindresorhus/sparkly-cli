#!/usr/bin/env node
'use strict';
const meow = require('meow');
const sparkly = require('sparkly');
const getStdin = require('get-stdin');

const cli = meow(`
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
`);

const input = cli.input;

if (input.length === 0 && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

if (input.length) {
	console.log(sparkly(input, cli.flags));
} else {
	getStdin().then(data => {
		data = data.match(/\d/g).map(x => parseInt(x, 10));
		console.log(sparkly(data, cli.flags));
	});
}
