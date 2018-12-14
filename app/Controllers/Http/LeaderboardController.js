'use strict'

// Bring in model
const Leaderboards = use('App/Models/Leaderboard')


class LeaderboardController {
	async index({ view }){
		
		const leaderboards = await Leaderboards.all()
		return view.render('leaderboards.leaderboard', {
			title: 'List Posts',
			leaderboards: leaderboards.toJSON()
		})
	}

	async api_all({response}){
		const leaderboard = await Leaderboards.all()

		return response.json(leaderboard)	
	}

	async api_details({params, response}){
		const leaderboard = await Leaderboards.find(params.id)

		return response.json(leaderboard)
	}

	async api_insert({request, response}){
		const dataPlayer = request.only('name')
		const Leaderboard = new Leaderboards()

		Leaderboard.nama = dataPlayer.name
		Leaderboard.combo = 0

		await Leaderboard.save()
		return response.json(Leaderboard)
	}

	async api_update({params, response, request}){
		const leaderboard = await Leaderboards.find(params.id)
		const dataPlayer = request.only('combos')

		leaderboard.combo = dataPlayer.combos
		
		await leaderboard.save()
		return response.json(leaderboard)
		
	}

	async api_delete({params, response}){
		const leaderboard = await Leaderboards.find(params.id)

		await leaderboard.delete()
		// return response.json()
	}
}

module.exports = LeaderboardController
