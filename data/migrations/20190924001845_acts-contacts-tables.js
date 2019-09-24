exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('acts', tbl => {
			tbl.increments();
			tbl.string('act_name', 128).notNullable();
            tbl.string('description')
            // Foreign Key
            tbl.integer('created_by')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
		})
		.createTable('contacts', tbl => {
			tbl.increments();

			tbl.string('contact_name', 128).notNullable;
            tbl.string('phone_number', 10)
            // FK
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

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('contact_acts_received');
	return knex.schema.dropTableIfExists('contacts');
	return knex.schema.dropTableIfExists('acts');
  return knex.schema.dropTableIfExists('users');
};