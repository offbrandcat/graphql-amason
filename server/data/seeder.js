const db = require('../config/connection');
const { User, Product, Order, Review } = require('../models/index');
const productSeed = require('./products.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});
  await Review.deleteMany({});

  const technologies = await Product.insertMany(productSeed);

  console.log('Seed worked');
  process.exit(0);
});
