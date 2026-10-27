import List from '../components/common/List'
import AddButton from '../components/common/AddButton'
import { getSongs } from '../services/songService'

export default function Setlist() {
  const songs = getSongs()
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Setlist</h1>
        <div>
          <AddButton />
        </div>
      </div>
      
      <section className="mt-4 flex justify-center">
        <div className="w-full max-w-5xl">
          <List songs={songs} />
        </div>
      </section>
    </>
  )
}
