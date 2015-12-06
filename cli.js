#!/usr/bin/env node
'use strict';
const meow = require('meow');
const sparkly = require('sparkly');

const cli = meow(`
	Usage
	  $ sparkly <number> [...]

	Options
	  --min  Minimum range
	  --max  Maximum range

	Examples
	  $ sparkly 0 3 5 8 4 3 4 10
	  ▁▃▄▅▃▃▃▆
	  $ sparkly --min=0 --max=10 1 2 3 4 5
	  ▁▂▃▄▄
`);

const input = cli.input;

if (input.length === 0) {
	console.error('Input required');
	process.exit(1);
}

console.log(sparkly(input, cli.flags));
