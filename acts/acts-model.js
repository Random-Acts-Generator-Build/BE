const db = require('../data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('acts').select('id', 'act_name');
}

function findBy(filter) {
    return db('acts').where(filter);
}

async function add(act) {
    const [id] = await db('acts').insert(act);

    return findById(id);
}

function findById(id) {
    return db('acts')
    .where({ id })
    .first();
}