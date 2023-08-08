exports.up = async function (knex) {
  await knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('profile_picture')
    table.string('family_name')
    table.string('given_name')
    table.string('address')
    table.string('gender')
    table.string('occupation')
    table.string('age')
    table.string('birthDate')
    table.string('deathDate')
    table.string('intermentDate')
    table.string('intermentType')
    table.string('placement')
    table.string('depth')
    table.string('purchaseDate')
    table.string('funeralDirector')
    table.string('notes')
    table.string('headstonePermitNumber')
    table.string('inscriptions')
    table.string('headstonePicture')
    table.string('headstoneLocationPic')
  })
}
exports.down = function (knex) {
  return knex.schema.dropTable('profiles')
}
