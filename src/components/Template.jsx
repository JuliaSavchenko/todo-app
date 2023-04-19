import { ToDoListItem } from './ToDoListItem'

export const Template = (props) => {
  const { taskList, editTask, removeTask, toggleComplete, changeTime } = props

  return (
    <div className="bg-white w-96 m-auto rounded-tl-3xl h-[32rem] overflow-scroll -translate-y-10">
      <div>
        {taskList
          ?.sort((a, b) => (a.time > b.time ? 1 : -1))
          .map((task) => (
            <ToDoListItem
              key={task.id}
              editTask={editTask}
              removeTask={() => removeTask(task.id)}
              toggleComplete={toggleComplete}
              changeTime={changeTime}
              task={task}
            />
          ))}
      </div>
    </div>
  )
}
