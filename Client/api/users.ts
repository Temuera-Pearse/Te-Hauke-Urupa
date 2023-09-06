import request from 'superagent'

const rootUrl = '/api/v1/'

export async function fetchUsers(token: string): Promise<UsersDataBackend> {
  const res = await request
    .get(rootUrl + 'user')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body.user
}
