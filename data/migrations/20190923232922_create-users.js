exports.up = function(knex) {
	return knex.schema.createTable('users', tbl => {
			tbl.increments();
	
			tbl
				.string('username', 255)
				.notNullable()
				.unique();
			tbl.string('password', 255).notNullable();
			tbl.string('role');
		});
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
