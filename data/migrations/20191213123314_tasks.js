
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
      tbl.increments();

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.text('description')
        .notNullable();

      tbl.text('notes')
        .nullable();

      tbl.boolean('completed', false)
        .notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
