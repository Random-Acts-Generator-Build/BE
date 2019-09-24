const db = require('../data/db-config');

module.exports = {
    add,
    find,
    getContact,
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

function getContact(id) {
    return db('contacts').where({ id }).first();
}

function getActs(id) {
    return db('acts').where({ id }).first();
}
