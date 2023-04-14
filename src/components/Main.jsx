
import { Header } from "./Header"
import { Template} from "./Template"
import { useState, useEffect } from "react"


export const Main = () => {

  const [taskList, setTaskList] = useState([])
  // const [toggleEdit, setToggleEdit] = useState(true)
  const [taskCount, setTaskCout] = useState(0)
  console.log(taskList);
  console.log(taskCount);
  useEffect (() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTaskList(tasks)
  }, [])

  useEffect(() => {
    setTaskCout(Object.keys(taskList).length || 0)
  }, [taskList])

  const addTask = () => {
    const newTaskItem = {  
      title: '',
      time: '',
      id: `${new Date().getTime()}`,
      isComplited: false,
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

  const editTask = ( id, taskTitle ) => {
    console.log(id);
    console.log(taskTitle);
    const editedTaskList = taskList.map(task => {
      if (task.id !== id) {
        return task
      } else {
        const editedTask =  {...task, title: taskTitle}
        return editedTask
      }
    })

    setTaskList(editedTaskList)

    localStorage.setItem('tasks', JSON.stringify(editedTaskList))
  }

  // const completeTask = (id, isDone) => {
  //   console.log(id);
  //   console.log(isDone);
  //   const isDoneArr = taskList.map(task => {
  //     if (task.id !== id) {
  //       return task
  //     } else {
  //       const editTask = {...task, isComplited: !isDone}
  //       console.log(editTask);
  //       return editTask
  //     }
      
  //   })

  //   console.log(isDoneArr);
  //   setTaskList(isDoneArr)

  //   localStorage.setItem('tasks', JSON.stringify(isDoneArr))
  // }
  
  return (
    <div className="App-container">
      <Header buttonName={"Add New"} onClick={addTask} taskCount={taskCount}/>
      <Template taskList = {taskList} removeTask={removeTask} editTask={editTask} />
    </div>
  )
}
