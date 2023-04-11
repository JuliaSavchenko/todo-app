import { DateSwitcher } from "./DateSwitcher"
import { ToDoListItem } from "./ToDoListItem"

export const Template = (props) => {
  const {listToDo, removeTask, editTask} = props
  return (
    <div className="bg-white w-96 m-auto rounded-tl-lg h-[32rem] overflow-scroll">
       <DateSwitcher />
        <div>  
          {listToDo?.map(item => 
          <ToDoListItem key={item.id} removeTask={() => removeTask(item.id)} editTask={editTask}/>)}
      </div>
    </div>
  )
}