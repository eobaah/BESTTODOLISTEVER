var express = require('express');
var router = express.Router();

var db = require('../queries');

//router.get('/todos', db.getAllTodos);
router.get('/todos', function(request, response) {
  db.getAllTodos()
    .then(function(todos) {
      response.render('index', { todos })
    })
    .catch(function(error) {
      response.render('error')
    })
});

router.post('/todos', db.createTodo);

// CREATE THINGS
router.put('todo/:id', function(request, response) {
  db.updateTodo()
    .then(function(todo) {
      response.redirect('/todos', { todo })
    })
  });
// router.delete('todo/:id', db.removeTodo);


module.exports = router;
