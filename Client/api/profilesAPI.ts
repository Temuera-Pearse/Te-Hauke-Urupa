import request from 'superagent'

const rootUrl = '/api/v1/profiles'

export async function fetchedProfiles() {
  const res = await request.get(rootUrl)
  return res.body
}
