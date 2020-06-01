exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments();
          tbl.text('project_Name', 128)
            .notNullable();
          tbl.text('project_description');
          tbl.boolean('completed')
            .defaultTo('false')
            .notNullable();
      })
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.text('task')
            .notNullable();
          tbl.text('note');
          tbl.boolean('completed')
            .defaultTo('false')
            .notNullable();
          tbl.integer('project_id')
            .references('id')
            .inTable('projects')
            .notNullable()
            .unique();
      })
      .createTable('resources', tbl => {
          tbl.increments();
          tbl.text('resource')
            .notNullable()
            .unique();
          tbl.text('resource_description');
          tbl.integer('project_id')
            .references('id')
            .inTable('projects')
      })


};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources');
};