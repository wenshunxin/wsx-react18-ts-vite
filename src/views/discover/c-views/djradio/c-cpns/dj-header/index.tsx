import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const DjHeader: FC<IProps> = () => {
  return <div>DjHeader</div>
}
export default memo(DjHeader)
