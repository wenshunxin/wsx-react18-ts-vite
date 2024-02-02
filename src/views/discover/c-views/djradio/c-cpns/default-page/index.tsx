import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const DefaultPage: FC<IProps> = () => {
  return <div>DefaultPage</div>
}
export default memo(DefaultPage)
