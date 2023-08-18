import connection from './connection'

import { proBackSchema } from '../../models/profile'

export async function getProfiles(db = connection) {
  return (await db('profiles').select()) as proBackSchema[]
}

export async function getProfilePics(db = connection) {
  return (await db('profiles').select(
    'profiles.profile_picture'
  )) as proBackSchema[]
}

export async function getProfilesById(id: number, db = connection) {
  return (await db('profiles')
    .where('profiles.id', id)
    .select()
    .first()) as proBackSchema[]
}

export async function getKey(db = connection) {
  return await db('key').select()
}
