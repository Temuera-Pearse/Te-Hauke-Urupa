import request from 'superagent'
import { proBackSchema } from '../../models/profile'
import MainPage from '../pages/MainPage/MainPage'

const rootUrl = '/api/v1/'

export async function fetchedProfiles(
  id: number,
  profile_picture: string
): Promise<proBackSchema[]> {
  const url = `${rootUrl}MainPage`
  console.log('im the api')

  const res = await request.get(url).set('Content-Type', 'application/json')
  return res.body.profiles
}
