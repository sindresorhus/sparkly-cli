import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.is((await execa('./cli.js', [1, 2, 3])).stdout, '▃▆█');
});

test('stdin', async t => {
	t.is((await execa.shell('echo 1 2 3 | ./cli.js')).stdout, '▃▆█');
});
