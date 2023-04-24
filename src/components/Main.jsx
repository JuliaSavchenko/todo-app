import { Header } from './Header'
import { Template } from './Template'
import { useState, useEffect } from 'react'

export const Main = () => {
  const [taskList, setTaskList] = useState([])
  const [taskCount, setTaskCout] = useState(0)

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTaskList(tasks)
  }, [])

  useEffect(() => {
    setTaskCout(Object.keys(taskList).length)
  }, [taskList])

  const addTask = () => {
    const newTaskItem = {
      title: '',
      time: '00:00',
      id: `${new Date().getTime()}`,
      isComplited: false,
    }

    setTaskList([...taskList, newTaskItem])

    localStorage.setItem('tasks', JSON.stringify([...taskList, newTaskItem]))
  }

  const removeTask = (id) => {
    const resultTask = taskList.filter((task) => task.id !== id)
    setTaskList(resultTask)
    localStorage.setItem('tasks', JSON.stringify(resultTask))
    return resultTask
  }

  const editTask = (id, value) => {
    const editedTaskList = taskList.map((task) => {
      if (task.id !== id) {
        return task
      } else {
        return { ...task, title: value }
      }
    })

    setTaskList(editedTaskList)

    localStorage.setItem('tasks', JSON.stringify(editedTaskList))
  }

  const toggleComplete = (id) => {
    const isDoneArr = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplited: !task.isComplited }
      }
      return task
    })

    setTaskList(isDoneArr)

    localStorage.setItem('tasks', JSON.stringify(isDoneArr))
  }

  const changeTime = (id, timeValue) => {
    const changedTimeList = taskList.map((task) => {
      if (task.id !== id) {
        return task
      } else {
        return { ...task, time: timeValue }
      }
    })

    setTaskList(changedTimeList)

    localStorage.setItem('tasks', JSON.stringify(changedTimeList))
  }

  return (
    <div className="App-container">
      <Header buttonName={'Add New'} onClick={addTask} taskCount={taskCount} />
      <Template
        taskList={taskList}
        removeTask={removeTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
        changeTime={changeTime}
      />
    </div>
  )
}
