const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

class Playlists {
  constructor(){
  }

  async allPlaylists() {
    return database('playlists')
      .select();
  }
//
  async findPlaylist(playlistId) {
    return database('playlists')
      .where('id', playlistId);
  }
//
  async deletePlaylist(playlistId) {
    return database('playlists').where('id', playlistId).del()
  }
//
  async createPlaylist(title){
   return database('playlists')
        .insert({
                title: title,
                })
        .returning(['id', 'title', 'created_at', 'updated_at']);
  }
}

module.exports = Playlists