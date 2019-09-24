const faker = require('faker');

const createFakeUser = () => ({
  username: faker.internet.userName(),
  password: faker.internet.password()
});

exports.seed = async function(knex, Promise) {
  const fakeUsers = [];
  const defaultUsers = 10;

  for(let i=0; i < defaultUsers; i++){
    fakeUsers.push(createFakeUser());
  }
  await knex('users')
    .insert(fakeUsers)  
};
