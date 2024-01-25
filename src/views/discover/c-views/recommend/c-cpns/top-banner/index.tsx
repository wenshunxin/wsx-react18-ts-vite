import { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetBannerAction } from '../../store/recommend'
import { BannerRight, BannerControl, BannerWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /** 处理doms数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useAppDispatch()
  /** 获取数据banner数据 */
  const { banners = [] } = useAppSelector(
    (state) => state.recommend,
    shallowEqualApp
  )

  function beforeChange(_form: number, to: number) {
    setCurrentIndex(to)
  }

  const bgImage =
    banners?.length && banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'

  useEffect(() => {
    dispatch(fetchGetBannerAction())
  }, [])
  return (
    <BannerWrapper
      style={{
        background: `url(${bgImage}) center center/6000px`
      }}
    >
      <div className="wrap-v2 flex relative">
        <Carousel
          effect="fade"
          className="h-285px !w-730px"
          ref={bannerRef}
          beforeChange={beforeChange}
        >
          {banners.map((item: any) => {
            return (
              <div key={item.imageUrl} className="h-285px !w-730px">
                <img className="h-full w-full" src={item.imageUrl} />
              </div>
            )
          })}
        </Carousel>
        <BannerRight className="bg-light-100">
          <div className="flex items-end justify-center h-full">
            <span className="text-[#8d8d8d] my-10px text-center">
              PC 安卓 iPhone WP iPad Mac 六大客户端
            </span>
          </div>
        </BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}
export default memo(TopBanner)
