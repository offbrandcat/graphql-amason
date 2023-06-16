const { Order, Product, User, Review  } = require('../models');

const resolvers = {
    Query: {
        viewProduct: async() =>{
            return await Product.find();
        },
        viewOrder: async() =>{
            return await Order.find();
        },
        viewReview: async() =>{
            return await Review.find();
        },
        viewUser: async() =>{
            return await User.find();
        },

    },

    Mutation: {
        addReview: async(_, args) => {
            const reivew = new Review(args);

            return review;
        }
    }
    
};

module.exports = resolvers;