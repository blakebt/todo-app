import classNames from "classnames"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  primary?: boolean,
  danger?: boolean,
  className?: string,
  children?: React.ReactNode
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({ primary, danger, children, className, ...rest }) => {

  const finalClasses = twMerge(classNames(className, 'flex items-center px-3 py-1.5 border rounded', {
    'border-tiffany bg-tiffany text-white': primary,
    'border-crayola bg-crayola text-white': danger
  }))
  
  return (
    <button {...rest} className={finalClasses}>{children}</button>
  )
}
export default Button 