import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const PullDown: FC<IProps> = () => {
  return <div>PullDown</div>
}
export default memo(PullDown)
