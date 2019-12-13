
exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
      tbl.increments();

      tbl.string('resource_name', 128)
        .notNullable()
        .unique()
        .index();

      tbl.text('description')
        .nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
