exports.seed = async function (knex) {
  await knex('profiles').del()
}
