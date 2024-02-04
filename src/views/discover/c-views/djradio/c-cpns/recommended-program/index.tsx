import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../dj-title'
interface IProps {
  children?: ReactNode
}

const RecommendedProgram: FC<IProps> = () => {
  return (
    <div className="wrap-v2">
      <DjTitle title={'推荐节目'}>
        <a href={'#/discover/djradio/recommend'}>更多</a>
      </DjTitle>
    </div>
  )
}
export default memo(RecommendedProgram)
