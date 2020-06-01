exports.seed = function(knex) {
    return knex('projects').insert([
       {project_Name: 'Build Closet App'},
       {project_Name: 'Medical App'},
       {project_Name: 'Launch Neutrem'},
       {project_Name: 'Start Web Dev '}
    ]);
};