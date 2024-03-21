import { memo, useEffect, useRef } from 'react'
import type { ReactNode, FC } from 'react'
import RecTitle from '../rec-title'
import { Carousel } from 'antd'
import { fetchGetAlbumNewestAction } from '../../../album/store/action'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { getImgUrl } from '@/utils'
interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { albumNewestList } = useAppSelector(
    (state) => state.album,
    shallowEqualApp
  )

  const carouselRef = useRef<any>(null)

  // 获取新碟上架数据
  useEffect(() => {
    dispatch(fetchGetAlbumNewestAction())
  }, [])
  return (
    <div>
      <RecTitle title={'新碟上架'}>
        <a href="#/discover/album">
          更多<i></i>
        </a>
      </RecTitle>
      <div className="mt-20px">
        <div className="h-184px bg-color-[#f5f5f5]  w-full border-1px relative border-color-[#d3d3d3]">
          <Carousel className="w-full h-184px ml-16px" ref={carouselRef}>
            <div className="w-full h-184px">
              <ul className="flex mt-18px">
                {albumNewestList?.slice(0, 5).map((item) => {
                  return (
                    <li key={item.id} className="w-118px ml-11px">
                      <a href={`#/album?id=${item.id}`}>
                        <div
                          className="sprite_cover"
                          style={{
                            width: '118px',
                            height: '100px',
                            backgroundPosition: '0 -570px'
                          }}
                        >
                          <img src={getImgUrl(item.picUrl, 100)} alt="" />
                        </div>
                        <p className="line-clamp-1 leading-18px text-[12px] text-[#000] mt-7px">
                          {item.name}
                        </p>
                      </a>
                      <a
                        className="text-[#666] leading-18px primary"
                        href={`#/artist?id=${item.artist?.id}`}
                      >
                        {item.artist?.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="w-full h-184px">
              <ul className="flex mt-18px">
                {albumNewestList?.slice(5, 10).map((item) => {
                  return (
                    <li key={item.id} className="w-118px ml-11px">
                      <div
                        className="sprite_cover"
                        style={{
                          width: '118px',
                          height: '100px',
                          backgroundPosition: '0 -570px'
                        }}
                      >
                        <img src={getImgUrl(item.picUrl, 100)} alt="" />
                      </div>
                      <p className="line-clamp-1 leading-18px text-[12px] text-[#000] mt-7px">
                        {item.name}
                      </p>
                      <a className="text-[#666] leading-18px">
                        {item.artist?.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Carousel>
          <a
            className="sprite_02"
            style={{
              position: 'absolute',
              top: '71px',
              width: '17px',
              height: '17px',
              left: '10px',
              backgroundPosition: '-260px -75px'
            }}
            onClick={() => carouselRef.current?.prev()}
          ></a>
          <a
            className="sprite_02"
            style={{
              position: 'absolute',
              top: '71px',
              width: '17px',
              height: '17px',
              right: '10px',
              backgroundPosition: '-300px -75px'
            }}
            onClick={() => carouselRef.current?.next()}
          ></a>
        </div>
      </div>
    </div>
  )
}
export default memo(NewAlbum)
