
type TitleProps = {
  data: string,
  taskCount: number
}

export const Title:React.FC<TitleProps> = (props) => {
  return (
    <div className="flex flex-col justify-self-start -translate-x-9">
      <h2 className="font-sans text-4xl text-zinc-50 font-bold mt-6 justify-self-start">{props.data}</h2>
      <span className="text-sm text-zinc-50">{props.taskCount > 1 || 0  ? "tasks" : "task"}</span>    
    </div>
  );
}

