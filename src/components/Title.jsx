
export const Title = (props) => {
  const {data, taskCount} = props
  return (
    <div className="flex flex-col justify-self-start -translate-x-9">
      <h2 className="text-4xl text-white font-sans font-bold mt-6 justify-self-start">{data}</h2>
      <span className="text-sm text-white al">{taskCount}{taskCount > 1 || taskCount === 0  ? " tasks" : " task"}</span>    
    </div>
  );
} 

