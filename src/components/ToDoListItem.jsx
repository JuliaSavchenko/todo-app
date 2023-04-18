import { useEffect, useState } from 'react'

export const ToDoListItem = (props) => {
  const { editTask, removeTask, toggleComplete, changeTime, task } = props
  const [value, setValue] = useState('')
  const [timeValue, setTimeValue] = useState('10:00')

  useEffect(() => {
    setValue(task.title)
  }, [task.title])  

  useEffect(() => {
    if (task.time) {
      setTimeValue(task.time)
    }
  }, [task.time])

  const onHandleClick = () => {
    toggleComplete(task.id)
  }

  const onHandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      editTask(task.id, value)
    }
  }

  const onHandleChangeInput = (e) => {
    setValue(e.target.value)
  }

  const onHandleChangeTime = (e) => {
    console.log(e.target.value)
    setTimeValue(e.target.value)
  }

  const onHandleSetTime = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value)
      changeTime(task.id, timeValue)
    }
  }

  return (
    <div className="flex flex-row justify-evenly items-center">
      <div className="flex flex-row m-10 items-center">
        <input
          type="checkbox"
          className="h-6 w-6 rounded-dm text-[#FF6DAB] border-gray-300 outline-transparent"
          checked={task.isComplited}
          onChange={onHandleClick}
        />
        <div className="flex flex-col content-end">
          <input
            type="text"
            className="text-[#FF6DAB] ml-4 p-0 w-30 border-transparent bg-transparent outline-none ring-white outline-transparent"
            value={value}
            onChange={onHandleChangeInput}
            onKeyDown={onHandleKeyDown}
            placeholder="...type any here"
          />
          <input
            type="time"
            className="text-[#FF6DAB] ml-4 p-0 w-30 bg-withe border-transparent ring-white outline-transparent caret-transparent appearance-none"
            value={timeValue || '10:00'}
            onChange={onHandleChangeTime}
            onKeyDown={onHandleSetTime}
          />
        </div>
      </div>
      <div>
        <button
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={removeTask}>
          <div className="h-6 w-6">X</div>
        </button>
      </div>
    </div>
  )
}
