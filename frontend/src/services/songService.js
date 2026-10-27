import songs from '../../../backend/repertoire/songs.json'

export function getAllSongs() {
  return songs.map(song => ({ ...song }))
}

export function getSong(id) {
  return console.log("getSong() is not implemented yet");
}

export function deleteSong(id) {
  return console.log("deleteSong() is not implemented yet");
}

export function updateSong(id) {
  return console.log("updateSong() is not implemented yet");
}

