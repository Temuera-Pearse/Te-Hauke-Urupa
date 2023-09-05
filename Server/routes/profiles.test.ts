import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import { getProfiles } from '../db/db'
import * as db from '../db/db'
import { proBackSchema } from '../../models/profile'

vi.mock('../db/db')

describe('GET /api/v1/profiles', () => {
  it('should return 200 with an array', async () => {
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

    vi.mocked(db.getProfiles).mockResolvedValue(fakeProfile)
    const response = await request(server).get('/api/v1/profiles')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeProfile)
  })
})
