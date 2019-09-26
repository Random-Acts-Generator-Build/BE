const faker = require('faker');

const createFakeContact = () => ({
  contact_name: faker.name.findName(),
  phone_number: faker.phone.phoneNumber(),
  user_id: faker.random.number({min:1, max: 10})
});

exports.seed = async function(knex, Promise) {
  const fakeContacts = [];
  const defaultContacts = 150;

  for(let i=0; i < defaultContacts; i++){
    fakeContacts.push(createFakeContact());
  }
  await knex('contacts')
    .insert(fakeContacts)  
};
