
import { Title } from './Title'
import { Button } from './Button'

type HeaderProps = {
  children: string,
  onClick: () => void
}

export const Header:React.FC<HeaderProps> = (props) => {
  const {children, onClick} = props
  return ( 
    <div className='bg-[#FF6DAB] rounded-3xl w-96 h-44 m-auto mt-12 flex justify-around'>
      <Title data={'Today'} taskCount={0} />
      <Button onClick={() => onClick()}>{children}</Button>
    </div>
  )
}

