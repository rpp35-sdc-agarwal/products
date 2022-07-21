const mongoose = require('mongoose');

const FeaturesSchema = new mongoose.Schema({
  feature: String,
  value: Number,
});

const PhotosSchema = new mongoose.Schema({
  thumbnail_url: String,
  url: String
})

const SkusSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  quantity: Number,
  size: String
})

const StylesSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  sale_price: Number,
  original_price: Number,
  default_style: Boolean,
  default_price: Number,
  photos: [PhotosSchema],
  skus: [SkusSchema]
});

const RelatedSchema = new mongoose.Schema({
  related_id: Number
})

const ProductsSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [FeaturesSchema],
  styles: [StylesSchema],
  related_products: [RelatedSchema]
})

const CartSchema = new mongoose.Schema({
  user_session: Number,
  product: [ProductsSchema],
  active: BOOLEAN
})