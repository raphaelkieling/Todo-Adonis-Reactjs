'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route
  .resource('tasks','TaskController')
  .apiOnly()
  .middleware('auth')

Route.post('login','UserController.login')
Route.post('logout','UserController.logout')

Route.post('users','UserController.create')
