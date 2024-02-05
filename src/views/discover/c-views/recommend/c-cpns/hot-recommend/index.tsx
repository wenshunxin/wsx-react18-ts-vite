import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import RecTitle from '../rec-title'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetHotRecommendAction } from '../../store/action'
import { getImgUrl } from '../../../../../../utils/tool'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const title = (
    <div className="flex items-center">
      <span>热门推荐</span>
      <div className="text-[12px] ml-20px flex items-center text-[#666]">
        {['华语', '流行', '摇滚', '民谣', '电子'].map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              <a href={`#/discover/songs?cat=${item}`}>{item}</a>
              <span className="mx-10px">|</span>
            </div>
          )
        })}
      </div>
    </div>
  )

  const dispatch = useAppDispatch()
  const { hotRecommendList } = useAppSelector(
    (state) => state.recommend,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchGetHotRecommendAction(8))
  }, [])
  return (
    <div>
      <RecTitle title={title}>
        <a href="#/discover/songs">
          更多<i></i>
        </a>
      </RecTitle>
      <ul className="-ml-42px flex flex-wrap mt-20px">
        {hotRecommendList.map((item, index) => {
          return (
            <li key={index} className="pl-42px w-140px h-204px box-content">
              <div>
                <img src={getImgUrl(item.picUrl, 140)} />
              </div>
              <p className="mt-8px mb-3px text-[14px]">
                <a className="leading-20px">{item.name}</a>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default memo(HotRecommend)
