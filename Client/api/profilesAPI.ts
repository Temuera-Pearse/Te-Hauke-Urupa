import request from 'superagent'
import { proBackSchema } from '../../models/profile'
import MainPage from '../pages/MainPage/MainPage'

const rootUrl = '/api/v1/profiles'

export async function fetchedProfiles(): Promise<proBackSchema[]> {
  const url = `${rootUrl}`

  const res = await request.get(url).set('Content-Type', 'application/json')

  return res.body
}

export async function fetchedPerson(id: number): Promise<proBackSchema[]> {
  const url = `${rootUrl}/${id}`
  const res = await request.get(url).set('Content-Type', 'application/json')

  return res.body
}

export async function fetchKey() {
  const url = '/api/v1/key'
  const res = await request.get(url).set('Content-Type', 'application')

  return res.body
}

export async function fetchProfileByName(): Promise<proBackSchema[]> {
  const url = `${rootUrl}`

  const res = await request.get(url).set('Content-Type', 'application/json')

  return res.body
}
