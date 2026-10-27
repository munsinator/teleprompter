import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function ListItem({ title }) {
  return (
    <li className="flex items-center pt-6 pb-6 justify-between hover:bg-gray-600 cursor-pointer">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faMusic} className="ml-4 text-lg" />
        <span className="font-bold text-lg">{title}</span>
        <span className="text-sm text-gray-400">Artist</span>
      </div>
      <div className="flex items-center mr-4">
        <span className="text-sm text-gray-400">Date</span>
      </div>
    </li>
  );
}