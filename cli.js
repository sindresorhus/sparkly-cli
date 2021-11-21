#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import sparkly from 'sparkly';
import getStdin from 'get-stdin';

const cli = meow(`
	Usage
	  $ sparkly <number> […]
	  $ echo <number> […] | sparkly

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
`, {
	importMeta: import.meta,
	input: {
		type: 'number',
	},
	flags: {
		min: {
			type: 'number',
		},
		max: {
			type: 'number',
		},
		style: {
			type: 'string',
		},
	},
});

const {input} = cli;

if (input.length === 0 && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

if (input.length > 0) {
	console.log(sparkly(input, cli.flags));
} else {
	(async () => {
		const data = (await getStdin()).match(/\d/g).map(x => Number.parseInt(x, 10));
		console.log(sparkly(data, cli.flags));
	})();
}
