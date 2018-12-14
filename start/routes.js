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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Route.get('/test/:id', ({params})=> `this is ${params.id}`) // Example with param
// Route.get('/test', ()=> 'Hello lord') // example standard
Route.get('api/v1/leaderboard/view', 'LeaderboardController.index')
Route.get('api/v1/leaderboard', 'LeaderboardController.api_all')
Route.get('api/v1/leaderboard/:id', 'LeaderboardController.api_details')
Route.post('api/v1/leaderboard', 'LeaderboardController.api_insert')
Route.patch('api/v1/leaderboard/:id', 'LeaderboardController.api_update')
Route.delete('api/v1/leaderboard/:id', 'LeaderboardController.api_delete')
