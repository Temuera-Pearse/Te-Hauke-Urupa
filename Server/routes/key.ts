import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', async (req, res) => {
  try {
    const key = await db.getKey()
    res.json(key)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'incorrect password' })
  }
})
