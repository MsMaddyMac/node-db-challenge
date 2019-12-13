
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Migration Creator', description: 'Teach class how to create migrations.', completed: false},
        {name: 'Seed Creator', description: 'Teach class to create seeds.', completed: false}
      ]);
    });
};
