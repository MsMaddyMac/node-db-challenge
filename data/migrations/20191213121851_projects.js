
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();

    tbl.string('name', 128)
        .notNullable()
        .unique()
        .index();

    tbl.text('description')
        .nullable();
    
    tbl.boolean('completed', false)
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
