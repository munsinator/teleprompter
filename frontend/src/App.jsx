import './App.css'
import { Outlet } from "react-router";
import Sidebar from './components/layout/Sidebar';

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar title="Teleprompter" />

        <main className="flex-1 h-screen bg-gray-700 text-white p-12">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
