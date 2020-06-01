exports.seed = function(knex) {
  return knex('tasks').insert([
     {task: 'code', project_id: '1'},
     {task: 'Order product', project_id: '3'},
  ]);
};