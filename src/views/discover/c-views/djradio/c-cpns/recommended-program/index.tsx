import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../dj-title'
import { RecommendWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetDjRecommendProgramAction } from '../../store/action'
import { getImgUrl } from '@/utils/tool'
interface IProps {
  children?: ReactNode
}

const RecommendedProgram: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { djRecommendProgramList = [], djCateList } = useAppSelector(
    (state) => state.dj,
    shallowEqualApp
  )
  useEffect(() => {
    // 获取推荐节目
    dispatch(fetchGetDjRecommendProgramAction(50))
  }, [])
  const title = (
    <div>
      推荐节目
      <span className="text-[12px] text-[#999] ml-13px">(每日更新)</span>
    </div>
  )
  return (
    <RecommendWrapper className="wrap-v2">
      <DjTitle title={title}></DjTitle>
      <div className="border-1 border-color-[#e2e2e2] border-t-0">
        {djRecommendProgramList.map((item, index) => {
          return (
            <div
              className={`py-10px flex items-center lending-40px box-content h-40px ${index % 2 == 1 ? 'bg-color-[#f7f7f7]' : 'bg-color-[#fff]'}`}
              key={index}
            >
              <div className="ml-20px relative">
                <img src={getImgUrl(item.coverUrl, 40)}></img>
                <i
                  className="absolute sprite_icon absolute w-22px  h-22px top-1/2 left-1/2 -ml-11px -mt-11px"
                  style={{
                    backgroundPosition: '0 -85px'
                  }}
                ></i>
              </div>
              <div className="w-304px ml-10px">
                <a className="line-clamp-1">{item.name}</a>
              </div>
              <div className="w-166px ml-10px">
                <a className="text-[#999]">{item.dj.brand}</a>
              </div>
              <div className="w-90px">
                <a className="text-[#999]">播放{item.listenerCount}</a>
              </div>
              <div className="w-126px">
                <a className="text-[#999]">赞👍{item.likedCount}</a>
              </div>
              <a
                href={`#/discover/djradio/category?id=${item.categoryId}`}
                className="ml-10px h-16px border-1 border-color-[#999] text-[#999] hover:border-color-[#666] hover:text-[#666] !no-underline leading-16px text-[12px] px-6px"
              >
                {djCateList.find((cate) => cate.id === item.categoryId)?.name ??
                  '未知'}
              </a>
            </div>
          )
        })}
      </div>
    </RecommendWrapper>
  )
}
export default memo(RecommendedProgram)
