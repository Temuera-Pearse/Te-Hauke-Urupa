import * as z from 'zod'

export const profileSchema = z.object({
  //Details
  profilePicture: z.string(),
  family_name: z.string(),
  given_name: z.string(),
  address: z.string(),
  gender: z.string(),
  Occupation: z.string(),
  age: z.string(),
  //Interment Details
  birthDate: z.string(),
  deathDate: z.string(),
  intermentDate: z.string(),
  intermentType: z.string(),
  placement: z.string(),
  depth: z.string(),
  purchaseDate: z.string(),
  funeralDirector: z.string(),
  notes: z.string(),
  //Headstone
  headstonePermitNumber: z.string(),
  inscriptions: z.string(),
  headstonePicture: z.string(),
  headstoneLocationPic: z.string(),
})

export const profileBackendSchema = profileSchema.extend({
  id: z.number(),
})
