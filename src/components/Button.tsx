import classNames from "classnames"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  primary?: boolean,
  danger?: boolean,
  rounded?: boolean,
  className?: string,
  children?: React.ReactNode
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({ primary, danger, rounded, children, className, ...rest }) => {

  const finalClasses = twMerge(classNames(className, 'flex items-center px-3 py-1.5 border', {
    'border-tiffany bg-tiffany text-white': primary,
    'border-crayola bg-crayola text-white': danger,
    'border-tiffany bg-tiffany text-white rounded': primary && rounded,
    'border-crayola bg-crayola text-white rounded': danger && rounded
  }))
  
  return (
    <button {...rest} className={finalClasses}>{children}</button>
  )
}
export default Button 