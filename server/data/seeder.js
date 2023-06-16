const db = require('../config/db');
const { Order, Product, User, Review } = require('../models');
const productData = require('./productData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    // await Order.deleteMany({});
    await Product.deleteMany({});
    // await Review.deleteMany({});

    const newProducts = await Product.create(productData);
    const newUsers = await User.create(userData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('this worked');
  process.exit(0);
});