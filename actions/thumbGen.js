const download = require('image-downloader')

let gen = async (img) => {
    const options = {
        url: img,
        dest: './public/'
    }
    try {
        const { filename, image } = await download.image(options)
        const imageName = filename.split("\\", 2)[1];
        return imageName;
    }
    catch (err) {
        return err;
    }
}
module.exports = { gen };
