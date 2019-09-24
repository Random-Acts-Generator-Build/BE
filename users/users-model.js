const db = require('../data/db-config');

module.exports = {
    add,
    find,
    getContacts,
    getActs,
    addContact,
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

async function addContact(contact) {
    const [id] = await db('contacts').insert(contact);

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

function getActs(id) {
    return db('acts').where({ id }).first();
}
