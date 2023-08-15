import express from 'express'
const router = express.Router()

import * as db from '../db/db'

import { getProfilesById } from '../db/db'

router.get('/', async (req, res) => {
  try {
    const profiles = await db.getProfiles()
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/MainPage', async (req, res) => {
  try {
    const profilePics = await db.getProfilePics()
    res.json(profilePics)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/MainPage/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const profiles = await getProfilesById(id)
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
