import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import PlayButton from './PlayButton'

export default function ListItem({ title, artist, createdAt, onSongSelect, isSelected = false }) {
  const formattedDate = createdAt
    ? createdAt.split('-').reverse().join('.')
    : '—'

  return (
    <li className={`flex items-center hover:bg-gray-600 ${isSelected ? 'bg-gray-600' : ''}`}>
      <button
        type="button"
        aria-pressed={isSelected}
        className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_10rem] items-center px-4 py-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-400"
        onClick={onSongSelect}
      >
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faMusic} className="shrink-0 text-lg" />
        <span className="font-bold text-lg">{title}</span>
        <span className="text-sm text-gray-400">{artist}</span>
      </div>
      <div className="flex items-center mr-4">
        <time dateTime={createdAt} className="text-sm text-gray-400">{formattedDate}</time>
      </div>
      </button>
      <div className="flex w-14 shrink-0 justify-center pr-4">
        {isSelected && <PlayButton label={`${title} abspielen`} />}
      </div>
    </li>
  );
}
