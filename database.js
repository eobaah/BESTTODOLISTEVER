const pgp = require('pg-promise')()
const db = pgp({database: 'caribou-todo'})

const create = {
  todo: (title, description, complete) => {
    db.one(
    `INSERT INTO
    todo (title, description, complete, priority)
    VALUES
    ( $1, $2, $3, $4 )
    RETURNING id`, [title, description, complete]
    )

db.todo.all()
const todo = {
  all: all => db.any(
    `SELECT
      *
     FROM
      todo order by id asc` ),
  getTitleByID: id => db.one(
    `SELECT
      title
     FROM
      todo
     WHERE
      id=$1`, [id]),
  edit: ids => db.any(
    `UPDATE
      todos
     SET
      todos.title=$2,
      description=$3
     WHERE id=$1`, [ids]),
  delete: id => db.none(
    `DELETE FROM
      todo
     WHERE 
      id=$1`, [id]),
}
