import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmpoloyeeDashboard = () => {
  return (
    <div className=' h-full w-full  px-10'>
        <Header/>
        <TaskNumber/>
        <TaskList/>
    </div>
  )
}

export default EmpoloyeeDashboard