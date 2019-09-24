
exports.up = function(knex) {
	return knex.schema.table('acts', tbl => {
		tbl
			.integer('created_by')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('users')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
	});
};

exports.down = function(knex) {
	return knex.schema
	.dropTableIfExists('contact_acts_received')
	.dropTableIfExists('contacts')
	.dropTableIfExists('acts')
	.dropTableIfExists('users')
};
