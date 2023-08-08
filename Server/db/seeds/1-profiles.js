exports.seed = async function (knex) {
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
  await knex('profiles').insert([
    {
      profile_picture: '',
      family_name: 'Doe',
      given_name: 'John Doe',
      address: '-',
      gender: 'male',
      occupation: 'comedian',
      age: '500+',
      birthDate: '25 December 1993',
      deathDate: '18 January 3005',
      intermentDate: '21 January 3005',
      intermentType: 'shot to space',
      placement: 'space',
      depth: '-',
      purchaseDate: '-',
      funeralDirector: 'nasa',
      notes: '',
      headstonePermitNumber: '420420',
      inscriptions: 'he is a rocket man',
      headstonePicture: '',
      headstoneLocationPic: '',
    },
  ])
  //!!!!!!!!!!!!!!!!!!!1currently these are fake users!!!!!!!!!!!!!!!!!!!!!
}
