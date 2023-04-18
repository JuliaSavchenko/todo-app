import { Title } from './Title'
import { Button } from './Button'

export const Header = (props) => {
  const { buttonName, onClick, taskCount } = props
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const date = new Date()
  const day = date.getDate()
  // Есть встроенные возможности форматирования даты
  // Смотри https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
  const month = monthNames[date.getMonth()]
  const fullDate = `${day} ${month}`
  return (
    <div className="bg-[#FF6DAB] rounded-3xl w-96 h-44 m-auto mt-12 flex justify-around">
      <Title data={fullDate} taskCount={taskCount} />
      <Button onClick={() => onClick()}>{buttonName}</Button>
    </div>
  )
}
