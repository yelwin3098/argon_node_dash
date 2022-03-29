const bcrypt = require('bcrypt');
const knex = require('../../db');
const uuid=require('uuid')

async function createUser({ name, username: email, password }) {
  const hashedPass = await bcrypt.hash(password, 5);
  const insertData={
    id:uuid.v4(),
    name:name,
    email:email,
    password: hashedPass,
    created_at: new Date(),
    updated_at: new Date(),
    email_verified_at: new Date(),
  }
  const userinsert = await knex('users')
    .insert(insertData)
  const users=await knex.select("*").from('users').where('id', insertData.id);
  // const user=[users[0].name,users[0].email]
  const user={name:users[0].name,email:users[0].email}
  return user;
}

module.exports = {
  createUser,
};
