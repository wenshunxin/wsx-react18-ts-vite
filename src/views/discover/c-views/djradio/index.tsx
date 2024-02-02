import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { DjRadioWrapper } from './style'
import DjHeader from './c-cpns/dj-header'
import { Outlet } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return (
    <DjRadioWrapper className="wrap-v2">
      <DjHeader />
      <Outlet />
    </DjRadioWrapper>
  )
}
export default memo(Djradio)
