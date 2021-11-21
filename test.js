import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', [1, 2, 3]);
	t.is(stdout, '▃▆█');
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input: '1 2 3'});
	t.is(stdout, '▃▆█');
});
