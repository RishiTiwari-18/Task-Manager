import React from "react";

const CreateTask = () => {
  return (
    <div className="h-[80%] px-20 mt-14 flex justify-between w-full">
      <div className="flex flex-col w-[43%] gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="taskTitle" className="text-lg font-semibold">
            Task Title:
          </label>
          <input
            id="taskTitle"
            type="text"
            placeholder="Enter task title"
            className="bg-white h-12 px-5  rounded-lg text-sm focus:outline-none "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskDate" className="text-lg font-semibold">
            Date:
          </label>
          <input
            id="taskDate"
            type="date"
            className=" bg-white h-12 px-5  rounded-lg text-sm focus:outline-none "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskAssign" className="text-lg font-semibold">
            Assign to:
          </label>
          <input
            id="taskAssign"
            type="text"
            placeholder="Enter person's name"
            className="bg-white h-12 px-5 rounded-lg text-sm focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskCategory" className="text-lg font-semibold">
            Category:
          </label>
          <select
            id="taskCategory"
            className="bg-white h-12 px-5 rounded-lg text-sm focus:outline-none appearance-none"
          >
            <option value="">Select a category</option>
            <option value="urgent">Urgent</option>
            <option value="high-priority">High Priority</option>
            <option value="low-priority">Low Priority</option>
          </select>
        </div>
      </div>

    <div className="flex flex-col w-[44%] gap-4">
      <label htmlFor="taskDescription" className="text-lg font-semibold">
        Description:
      </label>
      <textarea
        id="taskDescription"
        placeholder="Enter task description"
        className="bg-white h-[65%] w-full py-5  px-5 rounded-lg text-lg focus:outline-none resize-none mb-8"
        maxLength={140}
      />
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
      Create Task
    </button>
    </div>

    </div>
  );
};

export default CreateTask;
