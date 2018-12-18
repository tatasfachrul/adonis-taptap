'use strict'

// Bring in model
const Leaderboards = use('App/Models/Leaderboard')
const Database = use('Database')


class LeaderboardController {
	async index({ view }){
		
		const leaderboards = await Leaderboards.all()
		return view.render('leaderboards.leaderboard', {
			title: 'List Posts',
			leaderboards: leaderboards.toJSON()
		})
	}

	// API Get all data
	async api_all({response}){
		// const leaderboard = await Leaderboards.all()
		const leaderboard = await Database.from('leaderboards').orderBy('combo', 'desc')

		return response.json(leaderboard)	
	}
	// API Get data details
	async api_details({params, response}){
		const leaderboard = await Leaderboards.find(params.id)

		return response.json(leaderboard)
	}

	// API Input
	async api_insert({request, response}){
		const dataPlayer = request.only('name')
		const Leaderboard = new Leaderboards()

		Leaderboard.nama = dataPlayer.name
		Leaderboard.combo = 0

		await Leaderboard.save()
		return response.json(Leaderboard)
	}

	// API Update
	async api_update({params, response, request}){
		const leaderboard = await Leaderboards.find(params.id)
		const dataPlayer = request.only('highestCombo')

		leaderboard.combo = dataPlayer.highestCombo
		
		await leaderboard.save()
		return response.json(leaderboard)
		
	}
	// API Delete
	async api_delete({params, response}){
		const leaderboard = await Leaderboards.find(params.id)

		await leaderboard.delete()
		// return response.json()
	}
}

module.exports = LeaderboardController
