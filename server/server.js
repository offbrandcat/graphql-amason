const express = require("express");
const path = require("path");
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(notFound);
app.use(errorHandler);

if(process.env.NODE_ENV === 'production') {
  // To READ the react content when it is deployed in the internet
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start Apolloserver, then connect to express, connect to mongoose, THEN start the app
const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  db.once('open', () => {
      app.listen(PORT, () => {
          console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
      })
  })
}

startApolloServer();