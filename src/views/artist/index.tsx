import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { MainWrapper } from './style'
import { Outlet } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return (
    <MainWrapper className="wrap2 wrap-v2">
      <div className="left">
        <div>
          <Outlet />
        </div>
      </div>
      <div className="right">2</div>
    </MainWrapper>
  )
}
export default memo(Artist)
