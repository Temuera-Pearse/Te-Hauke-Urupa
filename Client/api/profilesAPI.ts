import request from 'superagent'
import { profileBackendSchema } from '../../models/profile'
import MainPage from '../pages/MainPage/MainPage'

const rootUrl = '/api/v1/profiles'

export async function fetchedProfiles() {
  const res = await request.get(rootUrl)
  return res.body
}

export async function fetchProfilePics(
  profile_picture: string
): Promise<profileBackendSchema> {
  const url = `${rootUrl}MainPage/${MainPage}`
  const res = await request.get(url).set('Accept', 'application.json')
  return res.body.profile_pictures
}
