import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import RecList from './c-cpns/rec-list'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
// import Ranking from '../ranking'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  function handleRender() {
    return <div>1212</div>
  }
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>

      <div className="rec-content wrap-v2 flex">
        <div className="left w-729px">
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟上架 */}
          <NewAlbum />
          {/* 榜单 */}
          <RecList />
        </div>
        <div className="right">{handleRender()}</div>
      </div>
    </RecommendWrapper>
  )
}
export default memo(Recommend)
