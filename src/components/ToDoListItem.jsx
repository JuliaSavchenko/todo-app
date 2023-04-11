
import { useState } from "react"

export const ToDoListItem = (props) => {
  const { editTask, removeTask } = props
  // const [isEmpty, setIsEmpty]  = useState(false)
  const [value, setValue] = useState('')
  const [timeValue, setTime] = useState('10:00')
 
  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleKeyDown = e => {
    if(e.key === 'Enter') {
      editTask(e.target.id, e.target.value)
    }
  }
  
  const handleChangeTime = e => {
    setTime(e.target.value)
  }

  return (
    <div className="flex flex-row justify-start m-10" onKeyDown={ handleKeyDown }>
      <input type="checkbox" className="h-6 w-6 text-green-600 border-gray-300 border-white-300" onClick={() => {}}/>
      <div className="flex flex-col">
        <input type="text" className="bg-white border-none placeholder-slate-400" value={ value } onChange={ handleChange } onClick={ editTask } placeholder="...type any here"/>
        <input type="time" value={ timeValue } onChange={ handleChangeTime }/>
        <button onClick={ removeTask }>x</button>
      </div>
    </div>
  )
}
