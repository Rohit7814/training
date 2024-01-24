import React, { useState, useRef } from 'react';

const Header = () => {
  const [tasks, setTasks] = useState([]);
  const [dates, setDates] = useState([]);
  const taskTitle = useRef(null);
  const taskDate = useRef(null);

  function createTask() {
    if (taskTitle.current.value.trim() !== '') {
      setTasks([...tasks, { title: taskTitle.current.value }]);
      taskTitle.current.value = ''; // Clear input field after adding task
    }
    if (taskDate.current.value.trim() !== '') {
      setDates([...dates, { date: taskDate.current.value }]);
      taskDate.current.value = '';
    }
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    const updatedDates = [...dates];
    updatedDates.splice(index, 1);
    setDates(updatedDates);
  }

  return (
    <div className='h-[60vh] w-[60vw] bg-gray-100 rounded-lg p-8 mx-auto mt-12 shadow-md'>
      <h1 className='text-center text-5xl pb-4 font-bold text-blue-700'>
        Todo React app
      </h1>

      <div className='flex space-x-2 mb-4'>
        <input
          type='text'
          placeholder='Enter todo name'
          ref={taskTitle}
          className='border-2 border-gray-300 focus:outline-none focus:border-blue-500 flex-grow h-12 px-4 rounded'
        />
        <input
          type='date'
          className='border-2 border-gray-300 focus:outline-none focus:border-blue-500 h-12 px-4 rounded'
          ref={taskDate}
        />
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={createTask}
        >
          Add
        </button>
      </div>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((item, index) => (
          <li
            key={index}
            className='flex items-center justify-between border-b-2 border-gray-300 py-2'
          >
            <span className='text-lg'>{item.title}</span>
            <span className='text-sm text-gray-500'>
              {dates[index] && dates[index].date}
            </span>
            <button
              className='text-red-600 hover:text-red-700 focus:outline-none'
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
