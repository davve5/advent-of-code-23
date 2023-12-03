import { readInputFile } from "./utils";

async function partOne() {
	const lines = await readInputFile()

	const total = lines.map((line) => {
		const chars = line.split('');

		const first = chars.find((value) => !Number.isNaN(Number(value)))!
		const second = chars.findLast((value) => !Number.isNaN(Number(value)))!

		return Number(first + second)
	}).reduce((acc, value) => acc + value, 0);

	console.log(total)
}

async function partTwo() {
	const lines = await readInputFile()

	const total = lines.map((line) => {
		const chars = line
			.replaceAll('one', 'o1e')
			.replaceAll('two', 't2o')
			.replaceAll('three', 't3e')
			.replaceAll('four', 'f4r')
			.replaceAll('five', 'f5e')
			.replaceAll('six', 's6x')
			.replaceAll('seven', 's7n')
			.replaceAll('eight', 'e8t')
			.replaceAll('nine', 'n9e')
			.split('')
		
		const first = chars.find((value) => !Number.isNaN(Number(value)))!
		const second = chars.findLast((value) => !Number.isNaN(Number(value)))!

		return Number(first + second)
	}).reduce((acc, value) => acc + value, 0);

	console.log(total)
}

void partOne()
void partTwo();