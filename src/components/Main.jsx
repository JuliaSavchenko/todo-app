
import { Header } from "./Header"
import { Template} from "./Template"
import { useState, useEffect } from "react"


export const Main = () => {

  const [taskList, setTaskList] = useState([])
  // const [toggleEdit, setToggleEdit] = useState(true)
  const [taskCount, setTaskCout] = useState(0)

  useEffect (() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTaskList(tasks)
  }, [])

  useEffect(() => {
    setTaskCout(Object.keys(taskList).length || 0)
  }, [taskList])

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

  const editTask = ( id, value ) => {
    const editedTaskList = taskList.map(task => {
      if (task.id === id) {
        setTaskList([...taskList, {...task, title: value}])
        task.isEdited = true
      }
      return task
    })
    localStorage.setItem('task', JSON.stringify([...editedTaskList]))
    return true 
  }
     
  
  return (
    <div className="App-container">
      <Header buttonName={"Add New"} onClick={addTask} taskCount={taskCount}/>
      <Template listToDo = {taskList} removeTask={removeTask} editTask={editTask}/>
    </div>
  )
}
