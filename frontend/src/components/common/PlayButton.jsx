import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function PlayButton({ label = 'Abspielen', onClick }) {
  return (
    <>
        <button type="button" aria-label={label} title={label} onClick={onClick} className="bg-green-700 rounded text-white hover:bg-green-600 p-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400">
            <FontAwesomeIcon icon={faPlay} aria-hidden="true" className="text-lg font-bold" />
        </button>
    </>
  )
}
