import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function ListItem({ title, artist, createdAt }) {
  const formattedDate = createdAt
    ? createdAt.split('-').reverse().join('.')
    : '—'

  return (
    <li className="grid grid-cols-[minmax(0,1fr)_10rem] items-center px-4 py-6 hover:bg-gray-600 cursor-pointer">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faMusic} className="shrink-0 text-lg" />
        <span className="font-bold text-lg">{title}</span>
        <span className="text-sm text-gray-400">{artist}</span>
      </div>
      <div className="flex items-center mr-4">
        <time dateTime={createdAt} className="text-sm text-gray-400">{formattedDate}</time>
      </div>
    </li>
  );
}
