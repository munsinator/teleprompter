import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faList, faGear } from '@fortawesome/free-solid-svg-icons'

const icons = {
  '/': faGuitar,
  '/setlist': faList,
  '/settings': faGear,
}

export default function SidebarItem({ title, to, collapsed = false }) {
  const icon = icons[to]

  return (
    <NavLink
      to={to}
      end
      aria-label={title}
      title={collapsed ? title : undefined}
      className={({ isActive }) =>
        `flex min-h-10 items-center rounded px-2 ${collapsed ? 'justify-center' : ''} text-md font-semibold ${isActive ? 'bg-gray-700' : ''} text-white cursor-pointer hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-blue-400`
      }
    >
      {collapsed
        ? (icon ? <FontAwesomeIcon icon={icon} aria-hidden="true" /> : title.slice(0, 1))
        : title}
    </NavLink>
  )
}
