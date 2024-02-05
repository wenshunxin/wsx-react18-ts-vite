import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const HotCommend: FC<IProps> = () => {
  return <div>HotCommend</div>
}
export default memo(HotCommend)
