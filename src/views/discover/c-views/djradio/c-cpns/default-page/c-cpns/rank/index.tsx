import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../../../dj-title'
interface IProps {
  children?: ReactNode
}

const Rank: FC<IProps> = () => {
  return (
    <div className="w-426px">
      <DjTitle title={'节目排行榜'}>
        <a href={`#/discover/djradio/rank`}>更多</a>
      </DjTitle>
    </div>
  )
}
export default memo(Rank)
