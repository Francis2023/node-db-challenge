const db = require('../data/dbConfig.js');

module.exports = {
  findProjects,
  findResources,
  add,
  findById,
  findTasks
};

function findProjects () {
    return db('projects')
};

function findResources () {
    return db('projects')
};

function findTasks(){

}

function findById(id) {
    return db('item')
      .where({ id })
      .first();
}

function add(item) {
    return db('item')
      .insert(item)
      .then(id => {
          return findById(id[0]);
      })
}