import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Friend: FC<IProps> = () => {
  return <div>Friend</div>
}
export default memo(Friend)
