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
            
            
      })
      .createTable('resources', tbl => {
          tbl.increments();
          tbl.text('resource')
            .notNullable()
            
          tbl.text('resource_description');
          tbl.integer('project_id')
            .references('id')
            .inTable('projects')
      })
      .createTable('resourceProject', tbl => {
          tbl.increments();
          tbl.integer('project_id')
             .references('id')
             .inTable('project');
          tbl.integer('resource_id')
            .references('id')
            .inTable('resources');
          
      })


};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources');
};