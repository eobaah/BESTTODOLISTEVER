var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/caribou-todo';
var db = pgp(connectionString);

// add query functions

function getAllTodos(request, response, next) {
  return db.many('select * from todos')
}

function getSingleTodo(request, response, next) {
  var todoID = parseInt(request.params.id);
  db.one('select * from todos where id = $1', todoID)
    .then(function (data) {
      response.status(200)
    });
}


function createTodo(request, response, next) {
  // const create = {
  //   todo: (title, description, complete) => {
  //     db.one(
  //     `INSERT INTO
  //     todo (title, description, complete, priority)
  //     VALUES
  //     ( $1, $2, $3, $4 )
  //     RETURNING id`, [title, description, complete]
  //     )
  // require.body.title
}

function updateTodo( id ) {
  return db.any(
  `UPDATE
    todos
   SET
    todos.title=$2,
    description=$3
   WHERE id=$1`, [id]
)}

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  //removeTodo
};
