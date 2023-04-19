import { Title } from './Title'
import { Button } from './Button'

export const Header = (props) => {
  const { buttonName, onClick, taskCount } = props
  const options = { weekday: 'long', day: 'numeric' }
  const date = new Date()
  const day = date.toLocaleDateString('en-US', options)

  return (
    <div className="bg-[#FF6DAB] rounded-3xl w-96 h-44 m-auto mt-12 flex justify-around">
      <Title data={day} taskCount={taskCount} />
      <Button onClick={() => onClick()}>{buttonName}</Button>
    </div>
  )
}
