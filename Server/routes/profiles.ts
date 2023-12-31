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

router.get('/main', async (req, res) => {
  try {
    const searchTerm = String(req.query.searchTerm)

    if (searchTerm) {
      // Handle profile search based on the searchTerm
      const searchedProfile = await db.getProfileBySearch(searchTerm)
      console.log('Received searchTerms:', searchTerm)
      res.json(searchedProfile)
    } else {
      // Handle fetching profile pictures
      const profilePics = await db.getProfilePics()
      res.json(profilePics)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const profile = await getProfilesById(id)
    console.log(profile)
    res.json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
