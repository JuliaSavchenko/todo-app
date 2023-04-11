
import { Header } from "./Header"
import { Template} from "./Template"
import { useState, useEffect } from "react"


export const Main = () => {

  const [taskList, setTaskList] = useState([])
  // const [toggleEdit, setToggleEdit] = useState(true)

  useEffect (() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTaskList(tasks)
  }, [])

  const addTask = () => {
    const newTaskItem= {  
      title: '',
      time: '',
      id: `${new Date().getTime()}`,
      isComplited: false,
      isEdited: false
    } 

    setTaskList([...taskList, newTaskItem])

    localStorage.setItem('tasks', JSON.stringify([...taskList, newTaskItem]))
  }

  const removeTask = ( id ) => {
    const resultTask = taskList.filter(task => task.id !== id)  
    setTaskList(resultTask)
    localStorage.setItem('tasks', JSON.stringify([...resultTask]))
    return resultTask
  } 

  const editTask = ( id, title ) => {
    const editedTaskList = taskList.map(task => {
      if (task.id === id) {
        setTaskList([...taskList, {...task, title: title}])
      }
      return task
    })

    return editedTaskList
  }
     
  return (
    <div className="App-container">
      <Header children={"Add New"} onClick={addTask} />
      <Template listToDo = {taskList} removeTask={removeTask} editTask={editTask}/>
    </div>
  )
}
