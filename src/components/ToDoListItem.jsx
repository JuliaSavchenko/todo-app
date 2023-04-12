
import { useState } from "react"

export const ToDoListItem = (props) => {
  const { editTask, removeTask } = props
  const [isDoney, setIsDone]  = useState(false)
  const [value, setValue] = useState('')
  const [timeValue, setTime] = useState('10:00')
 
  const handleChangeTime = e => {
    setTime([...value, e.target.value])
  }

  const handleSetTime = (value) => {
    setTime([...timeValue, value]);
    localStorage.setItem('time', JSON.stringify([...timeValue, value]))
  }

  return (
    <div className="flex flex-row justify-around items-center">
      <div className="flex flex-row m-10">
        <input type="checkbox" className="h-6 w-6 text-pink-500 border-gray-300 border-white-300" onClick={() => {}}/>
        <div className="flex flex-col ">
          <input type="text" className="block min-h-[auto] ml-4 w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
           value={ value } onChange={ e => setValue(e.target.value) } onKeyDown={ e => e.onKeyDown === 'Enter' ? () => editTask(value) :  setValue(value)} placeholder="...type any here"/>
          <input type="time" className="block min-h-[auto] ml-4 w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
           value={ timeValue } onChange={ handleChangeTime } onKeyDown={ () => handleSetTime(value) }/>  
        </div>
      </div>
      <div className="">
        <button className="" onClick={ removeTask }>x</button>
      </div>
    </div>
  )
}
