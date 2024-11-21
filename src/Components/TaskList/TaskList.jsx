import React from 'react'

const TaskList = () => {
  return (
    <div className=' h-[45%] mt-10  overflow-x-auto py-4 flex gap-4 flex-nowrap w-full '>
      <div className=" h-full w-[24.15%] px-4 py-4 bg-[#292929] shrink-0 rounded-lg">
        <div className=" flex justify-between items-center">
          <span className='text-sm bg-[#CD1818] px-2.5 text-white py-1 rounded-md'>High</span>
          <h3 className='text-base text-white'>20 feb 2024</h3>
        </div>

        <div className=" mt-8">
          <h1 className='text-[21px] text-white font-semibold'>Make a youtube video</h1>
          <p className='mt-2 text-zinc-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo officia voluptates in. Eligendi nostrum perspiciatis, facere quos, nihil aliquid numquam tempora incidunt delectus veniam</p>
        </div>
      </div>

    </div>
  )
}

export default TaskList