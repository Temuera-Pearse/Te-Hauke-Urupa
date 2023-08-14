import connection from './connection'

export async function getProfiles(db = connection) {
  return await db('profiles').select()
}

export async function getProfilePics(db = connection) {
  return await db('profiles').select('profile_pics')
}
