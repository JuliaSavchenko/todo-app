import { ListItem } from "types"
import { useState } from "react"
import { TimePicker } from "react-time-picker"

type ToDoListItemProps = {
  listItem: ListItem
  updateTask(): () => {}
}

export const ToDoListItem:React.FC<ToDoListItemProps>= (props) => {
  const {listItem, updateTask} = props
  // const [isEmpty, setIsEmpty]  = useState(false)
  const [value, setValue] = useState('')
  const [timeValue, setTime] = useState('10:00')
 
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      updateTask()
    }
  }
  
  const handleChangeTime = (e) => {
    setTime(e.target.value)
  }

  return (
      <div onKeyDown={handleKeyDown}>
      <input type="checkbox" onClick={()=>{}}/>
      <input type="text" value={ value } onChange={ handleChange }/>
      <TimePicker value={ timeValue } onChange={ handleChangeTime }/>
    </div>
  )
}
