const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    password: String
    isAdmin: Boolean
}
type Product {
    _id: ID
    name: String
    image: String
    brand: String
    category: String
    description: String
    reviews: [Review]
    rating: Int
    numReviews: Int
    price: Int
    countinStock: Int
}
type Review {
    _id: ID
    name: String
    rating: Int
    comment: String
    user: [User]
}
type Order {
    _id: ID
    user: [User]
    orderItems: [Product]
    shippingAddress: String
    paymentResult: Boolean
    itemsPrice: Int
    taxPrice: Int
    shippingPrice: Int
    totalPrice: Int
    isPaid: Boolean
    paidAt: String
    isDelivered: Boolean
    deliveredAt: String
}

type Query {
    viewProduct: [Product]
    viewOrder: [Order]
    viewReview: [Review]
    viewUser: [User]
}

type Mutation{
    addReview(title: String!, rating: Int!, comment: String!, user: ID): Review
}
`;

module.exports = typeDefs;