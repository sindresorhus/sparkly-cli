#!/usr/bin/env node
'use strict';
const meow = require('meow');
const sparkly = require('sparkly');

const cli = meow(`
	Usage
	  $ sparkly <number> [...]

	Options
	  --min   Minimum range
	  --max   Maximum range
	  --style Style for the sparklines

	Examples
	  $ sparkly 0 3 5 8 4 3 4 10
	  ▁▃▄▅▃▃▃▆
	  $ sparkly --min=0 --max=10 1 2 3 4 5
	  ▁▂▃▄▄
	  $ sparkly --style=fire 1 2 3 4 5 6 7 8 9 10
`);

const input = cli.input;

if (input.length === 0) {
	console.error('Input required');
	process.exit(1);
}

console.log(sparkly(input, cli.flags));
