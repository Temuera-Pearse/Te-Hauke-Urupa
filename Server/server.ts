import express from 'express'
import * as Path from 'node:path'

import profileRoutes from './routes/profiles'

const server = express()

server.use(express.json())

server.use('/api/v1/profiles', profileRoutes)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

if (process.env.NODE.ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')))

  server.get('*', (req, res) => {
    res.sendfile(Path.resolve(__dirname, '../index.html'))
  })
}

export default server
