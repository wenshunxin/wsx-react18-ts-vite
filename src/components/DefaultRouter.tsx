import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Outlet } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const DefaultRouter: FC<IProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
export default memo(DefaultRouter)
