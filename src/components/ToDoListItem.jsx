import { useEffect, useState } from 'react'

export const ToDoListItem = (props) => {
  const { editTask, removeTask, toggleComplete, changeTime, task } = props
  const [value, setValue] = useState('')
  const [timeValue, setTimeValue] = useState('00:00')

  useEffect(() => {
    setValue(task.title)
    setTimeValue(task.time)
  }, [task.time, task.title])

  const handleBlur = (e) => {
    e.preventDefault()
    editTask(task.id, value)
  }

  const onHandleChangeInput = (e) => {
    setValue(e.target.value)
  }

  const onHandleChangeTime = (e) => {
    setTimeValue(e.target.value)
  }

  const onHandleSetTime = (e) => {
    changeTime(task.id, timeValue)
  }

  return (
    <div className="flex flex-row justify-evenly items-center">
      <div className="flex flex-row m-10 items-center">
        <input
          type="checkbox"
          className="h-6 w-6 rounded-dm text-[#FF6DAB] border-gray-300 outline-transparent"
          checked={task.isComplited}
          onChange={() => toggleComplete(task.id)}
        />
        <div className="flex flex-col content-end mt-3">
          <input
            type="text"
            className="text-[#FF6DAB] ml-4 p-0 w-30 border-transparent bg-transparent focus:outline-none focus:border-none"
            value={value}
            onChange={onHandleChangeInput}
            onBlur={handleBlur}
            placeholder="...type any here"
          />
          <input
            type="time"
            className="visited:text-[#FF6DAB] font-normal text-xs ml-3.5 p-0 w-30 bg-withe border-transparent ring-white outline-transparent caret-transparent appearance-none"
            value={timeValue || '10:00'}
            onChange={onHandleChangeTime}
            onBlur={onHandleSetTime}
          />
        </div>
      </div>
      <div>
        <button
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#C9C9C9] hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={removeTask}
        >
          <div className="h-6 w-6 pr-12">X</div>
        </button>
      </div>
    </div>
  )
}
