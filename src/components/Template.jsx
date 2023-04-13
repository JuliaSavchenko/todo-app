// import { DateSwitcher } from "./DateSwitcher"
import { ToDoListItem } from "./ToDoListItem"

export const Template = (props) => {

  const {taskList, removeTask, editTask} = props
  return (
    <div className="bg-white w-96 m-auto rounded-tl-lg h-[32rem] overflow-scroll">
       {/* <DateSwitcher /> */}
        <div>  
          {taskList?.map(task => 
            <ToDoListItem 
            key={task.id} 
            title={task.title}
            removeTask={() => removeTask(task.id)} 
            editTask={() => editTask(task.id, task.title)}/>)
          }
      </div>
    </div>
  )
} 