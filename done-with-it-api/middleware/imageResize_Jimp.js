const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const outputFolder = 'public/assets';

module.exports = async (req, res, next) => {
	const images = [];

	const resizePromises = req.files.map(async (file) => {
		const image = await Jimp.read(file.path);
		await image.resize(2000, 2000);
		await image.writeAsync(
			path.resolve(outputFolder, file.filename + '_full.jpg')
		);

		const thumb_image = await Jimp.read(file.path);
		await thumb_image.resize(100, 100);
		await thumb_image.writeAsync(
			path.resolve(outputFolder, file.filename + '_thumb.jpg')
		);

		fs.unlinkSync(file.path);

		images.push(file.filename);
	});

	await Promise.all([...resizePromises]);

	req.images = images;

	next();
};
