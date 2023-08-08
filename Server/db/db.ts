import connection from './connection'

export async function getProfiles(db = connection) {
  return await db('profiles').select()
}
