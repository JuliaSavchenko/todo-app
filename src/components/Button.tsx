type ButtonProps = {
  children: string,
  onClick: () => void
}

export const Button:React.FC<ButtonProps> = (props) => {

  return (
    <button className="text-[#FF6DAB] text-base font-bold bg-white rounded-md w-24 h-11 self-end place-self-center mb-6 " onClick={props.onClick}>{props.children}</button>
  )
}