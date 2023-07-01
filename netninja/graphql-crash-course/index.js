import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import db from './db.js'

// types
import { typeDefs } from './schema.js'

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    reviews() {
      return db.reviews
    },
    authors() {
      return db.authors
    }
  }
}

// server setup
const server = new ApolloServer({
  // needed 2 properties
  // typeDefs -- definitions of types of data (i.e. author -> name, bio etc | game -> title, price, platform, etc)
  typeDefs,
  // resolvers
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log('Server ready at port', url)
