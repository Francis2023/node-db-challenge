const db = require('../data/dbConfig.js');

module.exports = {
  findProjects,
  findResources,
  add,
  findById,
  findTasks
};

function findProjects () {
    return db("projects")
      .select("*")
      .from("projects");
      
};

function findResources () {
    return db("projects")
      .select("*")
      .from("resources")
};

function findTasks(){
   return db("task")
     .join("projects")
     .select("task","project_Name","project_description")
     .from("tasks")
}

function findById(id) {
    return db("item")
      .where({ id })
      .first();
}

function add(item) {
    return db("item")
      .insert(item)
      .then(id => {
          return findById(id[0]);
      })
}