import test from 'ava';
import execa from 'execa';

test(async t => {
	const {stdout} = await execa('./cli.js', [1, 2, 3]);
	t.is(stdout, '▃▆█');
});
