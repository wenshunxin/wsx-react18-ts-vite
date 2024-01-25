import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import Ranking from '../ranking'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Ranking></Ranking>
    </RecommendWrapper>
  )
}
export default memo(Recommend)
