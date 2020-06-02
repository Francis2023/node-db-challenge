const express = require('express');

const projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
   projects.findProjects()
   .then(projects => {
      res.json(projects)
   })
   .catch(err => {
      res.status(500).json({ message: 'Failed to get projects'})
   })
});

router.post('/', (req, res) => {
   const projectData = req.body;

   projects.addProject(projectData)
   .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
       console.log(err)
      res.status(500).json({ message: 'Failed to create new project' });
    });
})

router.get('/resources', (req,res) => {
   projects.findResources()
   .then(resources => {
      res.json(resources)
   })
   .catch(err => {
      res.status(500).json({ message: 'Failed to get resources'})
   })
});

router.post('/resources', (req, res) => {
   const resourceData = req.body;

   projects.addResource(resourceData)
   .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
})

router.get('/tasks', (req,res) => {
   projects.findTasks()
   .then(tasks => {
      res.json(tasks)
   })
   .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks'})
   })
})

router.post('/tasks', (req, res) => {
   const taskData = req.body;

   projects.addTask(taskData)
   .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
})

module.exports = router;