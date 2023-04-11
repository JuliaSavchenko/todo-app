// import { useState } from "react"

export const DateSwitcher = () => {
  // const [date, setDate] = useState()

  return (
    <div className="flex flex-row justify-between text-slate-800 text-2xl">
      <div className="date previous"></div>
      <div className="date current">Mon, Aug</div>
      <button className="date next">Tue, Aug</button>
    </div>
    
  )
}