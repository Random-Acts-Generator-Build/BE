exports.up = function(knex) {
	return knex.schema
		.createTable('acts', tbl => {
			tbl.increments();
			tbl.string('act_name', 128).notNullable();
			tbl.string('description')
		})
		.createTable('contacts', tbl => {
			tbl.increments();

			tbl.string('contact_name', 128).notNullable;
			tbl.string('phone_number', 10)
			tbl.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE')
		})
		.createTable('contact_acts_received', tbl => {
			tbl.integer('contact_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('contacts')
			tbl.integer('act_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('acts')
			tbl.primary(['contact_id', 'act_id']);
		})

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
