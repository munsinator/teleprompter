import songs from '../data/songs.json'

export function getSongs() {
  return songs.map(song => ({ ...song }))
}
