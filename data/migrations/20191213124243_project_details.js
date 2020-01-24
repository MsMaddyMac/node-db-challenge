
exports.up = function(knex) {
  return knex.schema.createTable('project_details', tbl => {
      tbl.increments();

      tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.integer('resource_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.integer('task_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('tasks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('project_details');
};
