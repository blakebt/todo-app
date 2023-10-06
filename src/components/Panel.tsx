import classNames from "classnames";

interface PanelProps {
  className?: string,
  children?: React.ReactNode
}

const Panel = ({ children, className, ...rest }: PanelProps) => {
  const finalClasses = classNames(
    'border rounded p-5 shadow',
    className
  )

  return (
    <div {...rest} className={finalClasses}>{children}</div>
  )
}

export default Panel