'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeaderboardSchema extends Schema {
  up () {
    this.create('leaderboards', (table) => {
      table.increments()
      table.string('nama')
      table.integer('combo')
      table.timestamps()
    })
  }

  down () {
    this.drop('leaderboards')
  }
}

module.exports = LeaderboardSchema
