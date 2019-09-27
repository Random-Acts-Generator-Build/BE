const db = require('../data/db-config');

module.exports = {
    add,
    find,
    findBy,
		findById,
		updateAct,
		deleteAct
};

function find() {
    return db('acts').select('id', 'act_name', 'created_by');
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

function updateAct(changes, id) {
	return db('acts')
		.where({ id })
		.update(changes);
}
	
function deleteAct(id) {
	return db('acts')
		.where('id', id)
		.del();
}