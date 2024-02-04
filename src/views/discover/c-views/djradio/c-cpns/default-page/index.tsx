import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import Recommend from './c-cpns/recomment'
import Rank from './c-cpns/rank'
interface IProps {
  children?: ReactNode
}

const DefaultPage: FC<IProps> = () => {
  return (
    <div className="flex justify-between">
      <Recommend />
      <Rank />
    </div>
  )
}
export default memo(DefaultPage)
