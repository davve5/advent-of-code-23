import * as fs from 'node:fs/promises'

export async function readInputFile() {
	const file = await fs.readFile(`${__dirname}/input.txt`, 'utf-8');
	return file.split('\n')
}


export async function readInputFileFull() {
	const file = await fs.readFile(`${__dirname}/input.txt`, 'utf-8');
	return file;
}