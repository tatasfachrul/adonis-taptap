"use strict";

const Settings = use('App/Models/Setting')

class SettingController {
  async index({ view }) {
    return view.render("settings.settings");
  }

  async addImage({ view }) {
    return view.render("settings.image");
  }

  async uploadImage({ request, response }) {
    const Helpers = use('Helpers')
		const profilePic = request.file('main_image', {
		    types: ['image'],
		    size: '2mb'
		  })

		  await profilePic.move(Helpers.publicPath('upload/'), {
		    name: 'main_image.png',
		    overwrite: true
		  })

		
		const setting = await Settings.find(1)
		setting.name = 'main_image.png'
		await setting.save()

		return response.redirect('/settings')
  }

  async viewImage({response}){
    const setting = await Settings.find(1)

    return response.json(setting)
}



}

module.exports = SettingController;
