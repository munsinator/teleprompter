import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddButton({ onClick }) {
  return (
    <>
        <button className="bg-green-700 rounded text-white hover:bg-green-600 p-1" onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} className="text-lg font-bold" />
        </button>
    </>
  )
}