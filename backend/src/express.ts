import express from 'express'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { User } from "./entity/User"

import { Database, Resource } from '@adminjs/typeorm'

// settings
const PORT = 3001
const adminOptions = {
    resources: [User],
}

AdminJS.registerAdapter({
    Resource,
    Database,
})

const start = async () => {
    const app = express()

    const admin = new AdminJS(adminOptions)

    const adminRouter = AdminJSExpress.buildRouter(admin)

    app.use(admin.options.rootPath, adminRouter)

    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
    })
}

export default { start }