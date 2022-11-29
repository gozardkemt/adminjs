import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

const PORT = 3001

const start = async () => {
    const app = express()
  
    const admin = new AdminJS({})
  
    const adminRouter = AdminJSExpress.buildRouter(admin)
    app.use(admin.options.rootPath, adminRouter)
  
    app.listen(PORT, () => {
      console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
    })
  }


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

    start()

}).catch(error => console.log(error))
