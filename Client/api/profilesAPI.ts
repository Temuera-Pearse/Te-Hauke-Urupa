import request from 'superagent'
import { proBackSchema } from '../../models/profile'
import MainPage from '../pages/MainPage/MainPage'

const rootUrl = '/api/v1/profiles'

export async function fetchedProfiles(): Promise<proBackSchema[]> {
  const url = `${rootUrl}`
  console.log('im the api')

  const res = await request.get(url).set('Content-Type', 'application/json')
  console.log('api', res.body)
  return res.body
}
