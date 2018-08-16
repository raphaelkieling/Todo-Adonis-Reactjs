'use strict'

const Schema = use('Schema')

class TasksSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments()
      table.string('description').unique()
      table.enu('status', ['doing', 'done'])
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')

      table.timestamps()
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
