import { Outlet } from 'react-router'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen md:flex bg-white overflow-x-hidden'>
      <Sidebar />
      <div className='flex-1 md:ml-64 min-w-0'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
