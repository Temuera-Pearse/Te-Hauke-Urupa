import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', async (req, res) => {
  try {
    const profiles = await db.getProfiles()
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
