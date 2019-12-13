
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Zoom'},
        {resource_name: 'Slack', description: 'Use to interact with students during lecture.'},
        {resource_name: 'Peppermint Mocha Cold Brew', description: 'You will need this to keep your energy up!'}
      ]);
    });
};
