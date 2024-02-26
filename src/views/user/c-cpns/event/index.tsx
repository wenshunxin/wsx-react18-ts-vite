import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const UserEvent: FC<IProps> = () => {
  return <div>UserEvent</div>
}
export default memo(UserEvent)
