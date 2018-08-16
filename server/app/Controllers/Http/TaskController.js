'use strict'

const Task = use('App/Models/Task')
/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index({ auth }) {
    const tasks = await Task.query().where('user_id', auth.user.id)
    return tasks;
  }

  async store({ request, response, view, auth }) {
    const data = request.only(['description']);
    const { id } = auth.user;
    data.status = "doing"

    const task = await Task.create({ ...data, user_id: id })

    return task;
  }

  /**
   * Render a form to be used for creating a new task.
   * GET tasks/create
   */
  async create({ request, response, view }) {

  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show({ params, request, response, view }) {
    let task = await Task.find(params.id)
    return task;
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update({ params, request, response }) {
    const data = request.only(['description','status']);
    let task = await Task.find(params.id)

    task.merge(data)

    let task_updated = await task.save()

    return task_updated;
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy({ params, request, response }) {
    let task = await Task.find(params.id)
    await task.delete()
  }
}

module.exports = TaskController
