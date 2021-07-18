const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');


fs.readdirSync(target)
	.forEach(image => {

		sharp(`${target}/${image}`)
			.toFile(path.resolve(__dirname, `${target}/${image.split('.')
				.slice(0, -1)
				.join('.')}-x-large.jpg`));

		sharp(`${target}/${image}`)
			.resize(1200)
			.toFile(path.resolve(__dirname, `${target}/${image.split('.')
				.slice(0, -1)
				.join('.')}-large.jpg`));

		sharp(`${target}/${image}`)
			.resize(993)
			.toFile(path.resolve(__dirname, `${target}/${image.split('.')
				.slice(0, -1)
				.join('.')}-medium.jpg`));

		sharp(`${target}/${image}`)
			.resize(600)
			.toFile(path.resolve(__dirname, `${target}/${image.split('.')
				.slice(0, -1)
				.join('.')}-small.jpg`));
	});