import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function DeleteButton() {
  return (
    <>
        <button className="bg-red-700 rounded text-white hover:bg-red-600 p-1">
            <FontAwesomeIcon icon={faTrash} className="text-lg font-bold" />
        </button>
    </>
  )
}