import setlist from '../../../backend/setlist/setlist.json'

export function getSetlist() {
  return setlist.map(item => ({ ...item }))
}

export function saveSetlist() {
  return console.log("saveSetlist() is not implemented yet");
}

export function updateSetlist(setlistId, updatedData) {
  return console.log("updateSetlist() is not implemented yet");
}

export function deleteSetlist(setlistId) {
  return console.log("deleteSetlist() is not implemented yet");
}