const db = require('../config/connection');
const { User, Product, Order } = require('../models/index');
const productSeed = require('./products.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});

  const technologies = await Product.insertMany(productSeed);

  console.log('Seed worked');
  process.exit(0);
});
