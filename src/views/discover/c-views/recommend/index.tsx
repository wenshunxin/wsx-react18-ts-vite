import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import RecList from './c-cpns/rec-list'
import HotRecommend from './c-cpns/hot-recommend'
// import Ranking from '../ranking'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>

      <div className="rec-content wrap-v2 flex">
        <div className="left w-729px">
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 榜单 */}
          <RecList />
        </div>
      </div>
    </RecommendWrapper>
  )
}
export default memo(Recommend)
