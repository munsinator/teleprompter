import { useState } from 'react';
import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({title}) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} shrink-0 h-screen bg-gray-800 text-white p-4 flex flex-col gap-4 transition-[width] duration-200 motion-reduce:transition-none`}>
      <div className="flex items-center justify-between gap-2">
        {!collapsed && <h1 className="text-lg font-bold">{title}</h1>}
        <button
          type="button"
          onClick={() => setCollapsed(previous => !previous)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!collapsed}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-blue-400"
        >
          <span aria-hidden="true">{collapsed ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}</span>
        </button>
      </div>
      <SidebarItem title="Repertoire" to="/" collapsed={collapsed} />
      <SidebarItem title="Setlist" to="/setlist" collapsed={collapsed} />
      <div className="mt-auto">
        <SidebarItem title="Settings" to="/settings" collapsed={collapsed} />
      </div>
    </aside>
  )
}
