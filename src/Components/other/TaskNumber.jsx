import React from 'react'

const TaskNumber = () => {
  return (
    <div className='grid h-[25%] mt-8 grid-cols-4 gap-4'>
        <div className='bg-white flex flex-col justify-between h-full py-4 px-8 rounded-lg '>
            <h1 className=' text-[#FF2929] text-4xl'>0</h1>
            <p className='text-xl font-semibold text-[#FF2929]'>New Task</p>
        </div>
        <div className='bg-white h-full p-4 rounded-lg '>Card 2</div>
        <div className='bg-white h-full p-4 rounded-lg '>Card 3</div>
        <div className='bg-white h-full p-4 rounded-lg '>Card 4</div>
    </div>
  )
}

export default TaskNumber