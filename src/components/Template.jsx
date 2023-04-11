
import { DateSwitcher } from "./DateSwitcher"
import { ToDoListItem } from "./ToDoListItem"




export const Template = (props) => {
  const {listToDo, removeTask, editTask} = props
  return (
    <div className="bg-white w-96 m-auto rounded-tl-lg h-[32rem] overflow-scroll">
       <DateSwitcher />
        <div>  
          {listToDo?.map(item => 
          <ToDoListItem  key={item.id} listItem={{
          title: "",
          time: "",
          id: `${Date.now()}`,
          isComplited: false,
          isEdited: false
        }} removeTask={removeTask} editTask={editTask} listToDo={[]}/>)}
      </div>
    </div>
  )
}