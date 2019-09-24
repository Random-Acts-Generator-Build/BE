
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('acts').del()
    .then(function () {
      // Inserts seed entries
      return knex('acts').insert([
        {act_name: 'send flowers', description: 'send your friend a bouquet of their favorite flowers', created_by: 5 },
        {act_name: 'send a card', description: 'send a card by snail mail', created_by: 1 },
        {act_name: 'bake cookies', description: 'make their favorite!', created_by: 1 },
        {act_name: 'babysit', description: 'babysit for free', created_by: 1 },
        {act_name: 'share a meal', description: 'share your favorite meal or recipe', created_by: 3 },
        {act_name: 'yard work', description: 'help a friend with their yard work', created_by: 3 },
        {act_name: 'send a hello', description: 'text a friend just to say hello', created_by: 3 },
        {act_name: 'buy them coffee', description: 'take your friend for coffee', created_by: 7 },
        {act_name: 'lunch date', description: 'treat a friend for lunch', created_by: 7 },
        {act_name: 'pet care', description: 'offer to walk their dog', created_by: 7 }
      ]);
    });
};
