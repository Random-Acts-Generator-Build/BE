
exports.up = function(knex) {

};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('contact_acts_received')
		.dropTableIfExists('acts')
};
