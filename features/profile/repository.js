const knex = require('../../db');

async function getUser(id) {
  const [user] = await knex('users')
    .where('id', id)
    .select('email', 'name');
  return user;
}

async function updateUserInfo({ name, username: email, id }) {
  const updateUser = await knex('users')
    .where({ id })
    .update({
      name,
      email,
      updated_at: new Date(),
    })
  const users=await knex.select("*").from('users').where('id', id);
  // const user=[users[0].name,users[0].email]
  const user={name:users[0].name,email:users[0].email}
  return user;
}

module.exports = {
  getUser,
  updateUserInfo,
};
