export const Title = (props) => {
  const { data, taskCount } = props

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl text-white font-sans font-bold mt-6">{data}</h2>
      <span className=" flex text-sm text-white justify-self-start ml-1 font-normal">
        {taskCount}
        {taskCount > 1 || taskCount === 0 ? ' tasks' : ' task'}
      </span>
    </div>
  )
}
