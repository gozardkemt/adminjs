import express from 'express'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { User } from './entity/User'

import { Database, Resource } from '@adminjs/typeorm'

import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};


/**
 * Express general settings
 */
const PORT = 3001
const adminOptions = {
    resources: [User],
}

AdminJS.registerAdapter({
    Resource,
    Database,
})

const start = async () => {
    /**
    * Graphql server
    */
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    // apolloServer.start() have to run before express()
    await apolloServer.start();

    /**
     * Admin server
     */
    const admin = new AdminJS(adminOptions)
    const adminRouter = AdminJSExpress.buildRouter(admin)

    const app = express()
    app.use(admin.options.rootPath, adminRouter)
    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`🚀 Apollo graphql server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
    })
}

export default { start }
