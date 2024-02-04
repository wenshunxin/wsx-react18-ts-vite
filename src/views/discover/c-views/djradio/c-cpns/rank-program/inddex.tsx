import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const RankProgram: FC<IProps> = () => {
  return <div className="wrap-v2">RankProgram</div>
}
export default memo(RankProgram)
