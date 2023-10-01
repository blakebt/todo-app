import { useState } from "react"

interface CheckBoxProps {
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>
}
const Checkbox: React.FC<CheckBoxProps> = ({ setCompleted }) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = () => {
    setChecked(prev => !prev)
    setCompleted(prev => !prev)
  }

  return (
    <input type="checkbox" onChange={handleChange} checked={checked}/>
  )
}
export default Checkbox