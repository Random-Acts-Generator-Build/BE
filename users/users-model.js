const db = require('../data/db-config');

module.exports = {
    add,
		find,
		updateUser,
		deleteUser,
    getContacts,
    getContactById,
    getActsById,
    addContact,
    updateContact,
    deleteContact,
    getActs,
    addAct,
    findBy,
    findById
};

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function updateUser(changes, id) {
  return db('users')
  	.where({ id })
    .update(changes);
}
  
function deleteUser(id) {
	return db('users')
  	.where('id', id)
    .del();
}

async function addContact(contact) {
    const [id] = await db('contacts').insert(contact);

    return findById(id);
}

async function addAct(act) {
    const [id] = await db('acts').insert(act);

    return findById(id);
}

function findById(id) {
    return db('users')
    .where({ id })
    .first();
}

function getContacts(userId) {
    return db('contacts')
        .join('users', 'users.id', 'user_id')
        .select('contact_name', 'phone_number')
        .where('user_id', userId);
}

function getActs(createdBy) {
    return db('acts')
        .join('users', 'users.id', 'user_id')
        .select('act_name', 'description', 'created_by')
        .where('created_by', createdBy);
}

function getActsById(id) {
    return db('acts').where({ id }).first();
}

function getContactById(id) {
    return db('contacts')
      .where({ id })
      .first();
}

function updateContact(changes, id) {
    return db('contacts')
      .where({ id })
      .update(changes);
}

function deleteContact(id) {
	return db('contacts')
	.where('id', id)
	.del();
}