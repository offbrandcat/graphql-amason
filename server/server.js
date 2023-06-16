const express = require('express'); 
// const path = require('path'); 
const { ApolloServer } = require('apollo-server-express'); 
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/db')
const PORT = process.env.PORT || 3001; 

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const app = express(); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')))
// }

// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => { 
    app.listen(PORT, () => { 
      console.log(`http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
}

startApolloServer(); 