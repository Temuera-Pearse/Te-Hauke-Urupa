exports.up = async function (knex) {
  await knex.schema.createTable('key', (table) => {
    table.increments('id').primary()
    table.string('key')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('key')
}
