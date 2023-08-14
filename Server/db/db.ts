import connection from './connection'

import { proBackSchema } from '../../models/profile'

export async function getProfiles(db = connection) {
  return await db('profiles').select()
}

export async function getProfilePics(db = connection) {
  return (await db('profiles').select(
    'profiles.profile_picture'
  )) as proBackSchema[]
}
