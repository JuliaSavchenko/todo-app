
import { Header } from "./Header"
import { Template} from "./Template"
import { useState, useEffect } from "react"
import { ListItem } from "../types"


export const Main:React.FC<ListItem> = () => {

  const [taskList, setTaskList] = useState<ListItem[]>([])

  useEffect(() => {
    
  })

  const addTask = () => {
    setTaskList([...taskList, {  
      title: '',
      time: '',
      id: `${new Date()}`,
      isComplited: false
    }])
  }

  return (
    <div className="App-container">
      <Header children={"Add New"} onClick={addTask} />
      <Template listToDo = {taskList} />
    </div>
  )
} 

