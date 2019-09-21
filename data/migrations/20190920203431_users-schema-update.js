
exports.up = function(knex) {
	return knex.schema.table('users', tbl => {
		tbl.string('role');
	});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('contact_acts_received')
		.dropTableIfExists('contacts')
		.dropTableIfExists('acts')
		.dropTableIfExists('users')
};
