import songs from '../data/songs.json'

export function getAllSongs() {
  return songs.map(song => ({ ...song }))
}
