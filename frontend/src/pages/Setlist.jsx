import List from '../components/common/List'
import AddButton from '../components/common/AddButton'
import DeleteButton from '../components/common/DeleteButton'
import { getSetlist } from '../services/setlistService'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export default function Setlist() {
  const setlist = getSetlist()
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Setlist</h1>
        <div className="flex gap-2">
          <AddButton onClick={() => console.log("Add button clicked")} />
          <DeleteButton />
        </div>
      </div>
      
      <section className="mt-4 flex justify-center">
        <div className="w-full max-w-5xl">
          <List list={setlist} icon={faFolder} />
        </div>
      </section>
    </>
  )
}
