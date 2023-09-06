import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import { getProfiles } from '../db/db'
import * as db from '../db/db'
import { proBackSchema } from '../../models/profile'
import { response } from 'express'

vi.mock('../db/users')
vi.mock('../logger.ts')

describe('POST /api/v1/passwordCheck', () => {
  const fakeProfile: proBackSchema[] = [
    {
      id: 1,
      profile_picture: 'pic.jpeg',
      family_name: 'fake_family_name',
      given_name: 'fake_given_name',
      address: 'fake_addy',
      gender: 'fake_gender',
      Occupation: 'fake_job',
      age: 'fake_age',
      birthDate: 'fake_birthday',
      deathDate: 'fake_death',
      intermentDate: 'fake_interment',
      intermentType: 'fake_interment_type',
      placement: 'fake_placment',
      depth: 'fake_depth',
      purchaseDate: 'fake_purchase',
      funeralDirector: 'fake_director',
      notes: '---',
      headstonePermitNumber: 'fake_permit_number',
      inscriptions: 'fake',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
  ]
})
