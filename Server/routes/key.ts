import express from 'express'
const router = express.Router()

import * as db from '../db/db'
import { verifyPassword } from '../db/passwordVerifications'

router.post('/', async (req, res) => {
  const { password } = req.body
  const isCorrect = await verifyPassword(password)

  res.json({ correct: isCorrect })
})

export default router
