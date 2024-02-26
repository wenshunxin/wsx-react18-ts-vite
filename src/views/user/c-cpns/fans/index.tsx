import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const UserFans: FC<IProps> = () => {
  return <div>UserFans</div>
}
export default memo(UserFans)
