import { ListItem } from "types"
import { DateSwitcher } from "./DateSwitcher"
import { ToDoListItem } from "./ToDoListItem"
import { FC } from "react"


type TemplateProps = {
  listToDo: ListItem[]
}

export const Template:FC<TemplateProps> = (props) => {
  const {listToDo} = props
  return (
    <div className="bg-[#ffe5ec] w-96 m-auto rounded-tl-lg h-[32rem]">  
      <DateSwitcher />
      {listToDo?.map(item => <ToDoListItem listItem={{
        title: "",
        time: "",
        id: `${new Date}`,
        isComplited: false
      }} updateTask={function (): () => {} {
        throw new Error("Function not implemented.")
      } }  />)}
    </div>
  )
}