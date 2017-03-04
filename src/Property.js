const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequiredString = { type: String, required: true };

const ImageSchema = new Schema({
  url: String,
  thumbnailUrl: String
});

const schema = new Schema({
  zoopla: {
    listingId: String,
    url: String
  },
  description: RequiredString,
  publishDate: { type: String, required: true },
  floors: Number,
  bedrooms: Number,
  bathrooms: Number,
  listingType: {
    type: String,
    required: true,
    enum: ['sale', 'rent']
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'offered', 'inactive']
  },
  landUse: {
    type: String,
    required: true,
    default: 'Residential'
  },
  propertyType: RequiredString,
  price: RequiredString,
  location: {
    latitude: Number,
    longitude: Number,
    address: RequiredString,
    postcode: RequiredString,
    country: RequiredString
  },
  images: [ImageSchema]
});

module.exports = mongoose.model('Property', schema);
