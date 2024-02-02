import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  title: string
  children?: ReactNode
}

const DjTitle: FC<IProps> = (props) => {
  const { title, children } = props
  return (
    <div className="h-40px border-b-2 border-color-[#c20c0c] flex items-center justify-between">
      <h2 className="text-[24px]">{title}</h2>
      {children}
    </div>
  )
}
export default memo(DjTitle)
