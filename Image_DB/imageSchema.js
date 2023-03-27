const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
    img: String,
    id: Number,
  },
  { collection: 'image' }
);

imageSchema.statics.findImage = async function () {
  const image = await this.find();
  return image;
}

const image = mongoose.model('image', imageSchema);

module.exports = image;