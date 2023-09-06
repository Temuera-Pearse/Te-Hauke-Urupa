import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/db'
import { proBackSchema } from '../../models/profile'
import { response } from 'express'

vi.mock('../db/db')

describe('GET /api/v1/profiles', () => {
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

  it('should return 200 with an array', async () => {
    vi.mocked(db.getProfiles).mockResolvedValue(fakeProfile)
    const response = await request(server).get('/api/v1/profiles')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeProfile)
  })

  it('should return profile when searched', async () => {
    vi.mocked(db.getProfileBySearch).mockResolvedValue(fakeProfile)
    const response = await request(server)
      .get('/api/v1/profiles')
      .query({ searchTerm: 'fake_given_name' })
    expect(response.status).toBe(200)
    expect(response.body).to.deep.equal(fakeProfile)
  })

  it('should return a profile by id', async () => {
    vi.mocked(db.getProfilesById).mockResolvedValue(fakeProfile)
    const response = await request(server).get(`/api/v1/profiles/${1}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(fakeProfile)
  })

  it('should get profile pics only', async () => {
    vi.mocked(db.getProfilePics).mockResolvedValue(fakeProfile)
    const response = await request(server).get('/api/v1/profiles')
    expect(response.status).toBe(200)
    for (const fakeProfile of response.body) {
      expect(fakeProfile).toHaveProperty('profile_picture')
    }
  })
})
