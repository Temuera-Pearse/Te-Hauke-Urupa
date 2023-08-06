import express from 'express'
import { join } from 'node:path'
import axios from 'axios'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.get(async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/data')
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' })
  }
})

export default server
