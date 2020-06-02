const db = require('../data/dbConfig.js');

module.exports = {
  findProjects,
  findResources,
  addProject,
  findById,
  findTasks,
  addTask,
  addResource
};

function findProjects () {
    return db("projects")
      .select("*")
      .from("projects");
      
};

function findResources () {
    return db("resources")
      .select("*")
      .from("resources")
};

function findTasks(){
   return db("tasks")
     .select("task","project_Name","project_description","project_id")
     .join("projects", 'projects.id', 'tasks.project_id')
    
}

function findById(id) {
    return db("projects")
      .where({ id })
      .first();
}

function addProject(project) {
    return db("projects")
      .insert(project)

}
function addTask(task) {
  return db("tasks")
    .insert(task)

}
function addResource(resource) {
  return db("resources")
    .insert(resource)

}