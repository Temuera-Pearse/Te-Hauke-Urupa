require('dotenv').config()
import express from 'express'
import * as Path from 'node:path'

import profileRoutes from './routes/profiles'
import keyRoutes from './routes/key'
console.log('Stored Password:', process.env.REACT_APP_PASSWORD)
const server = express()

server.use(express.json())

server.use('/api/v1/key', keyRoutes)
server.use('/api/v1/profiles', profileRoutes)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')))

  server.get('*', (req, res) => {
    const reactAppPassword = process.env.REACT_APP_PASSWORD

    res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Te Hauke Urupa</title>
          <link rel="stylesheet" href="/output.css" />
        </head>
        <body>
          <div id="app" class=""></div>
          <script>
            // Pass the environment variable value to the client-side script
            window.reactAppPassword = "${reactAppPassword}";
          </script>
          <script src="./client/index.tsx" type="module"></script>
        </body>
      </html>
    `)
  })
}

export default server
