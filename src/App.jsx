import React from 'react'
import Login from './Components/Auth/Login'
import EmpoloyeeDashboard from './Components/Dashboard/EmpoloyeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <div className='bg-[#e9e9e9] h-screen w-full  '>
      {/* <Login/> */}
      {/* <EmpoloyeeDashboard/> */}
      <AdminDashboard/>
      
    </div>
  )
}

export default App