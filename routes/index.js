var express = require('express');
var router = express.Router();

var db = require('../queries');

//router.get('/todos', db.getAllTodos);
router.get('/todos', function(request, response) {
  db.getAllTodos()
    .then( todos => {
      response.render('index', { todos })
    })
    .catch( error => {
      response.render('error')
    })
});

// CREATE THE THINGS
router.post('/todos', (request, response) => {
  db.createTodo(request.body.title)
    .then( todos => {
      response.redirect( 'todos' )
    })
    .catch( error => {
      response.render('error')
    })
});

// UPDATE THE THINGS
router.post('/todos/:id', (request, response) => {
  const { title, description } = request.body

  db.updateTodo(request.params.id, title, description)
    .then( todo => {
      response.redirect('/todos')
    })
    .catch( error => {
      response.send(error)
    })
});

// DELETE THE THINGS
router.post('/todos/delete/:id', (request, response) => {
  console.log(request.params.id)
  db.removeTodo(request.params.id)
  .then(todo => {
    response.redirect('/todos')
  })
  .catch(error => {
    response.send(error)
  });
});


module.exports = router;
