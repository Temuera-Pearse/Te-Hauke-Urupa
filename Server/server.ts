require('dotenv').config()
import express from 'express'
import * as Path from 'node:path'

import profileRoutes from './routes/profiles'
import passwordRoutes from './routes/key'

console.log('Stored Password:', process.env.SERVER_APP_PASSWORD)
const server = express()

server.use(express.json())

server.use('/api/v1/passwordCheck', passwordRoutes)
server.use('/api/v1/profiles', profileRoutes)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

export default server
