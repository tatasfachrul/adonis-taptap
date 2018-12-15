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

// Web View Leaderboard
Route.get('leaderboard', 'LeaderboardController.index')

// API Leaderboard
Route.get('api/v1/leaderboard', 'LeaderboardController.api_all')
Route.get('api/v1/leaderboard/:id', 'LeaderboardController.api_details')
Route.post('api/v1/leaderboard', 'LeaderboardController.api_insert')
Route.patch('api/v1/leaderboard/:id', 'LeaderboardController.api_update')
Route.delete('api/v1/leaderboard/:id', 'LeaderboardController.api_delete')

// Web view App Setting
Route.get('/settings', 'SettingController.index')
Route.get('/add-image', 'SettingController.addImage')

// API App setting
Route.post('api/v1/settings/upload-image', 'SettingController.uploadImage')
Route.get('main-images', 'SettingController.viewImage')


