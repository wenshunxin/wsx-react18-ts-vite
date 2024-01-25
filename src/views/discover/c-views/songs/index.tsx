import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  console.log(document.getElementsByTagName('body'))
  return <div className="wrap-v2">Songs</div>
}
export default memo(Songs)
