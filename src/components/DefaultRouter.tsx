import { Suspense, memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'
interface IProps {
  children?: ReactNode
}

const DefaultRouter: FC<IProps> = () => {
  return (
    <div>
      <Suspense fallback={<Spin></Spin>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default memo(DefaultRouter)
