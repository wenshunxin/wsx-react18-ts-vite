import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { SongsWrapper } from './style'
import { fetchCurrentSongsAction } from '@/views/player/store/action'
import PullDown from './c-cpns/pull-down'
import { useSearchParams } from 'react-router-dom'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetPlayListAction, getPlayDetail } from './store'
import { getImgUrl } from '@/utils'
import HYPagination from '@/components/pagination'
interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { playlistsData } = useAppSelector(
    (state) => state.songs,
    shallowEqualApp
  )
  const [isShowPullDown, setIsShowPullDown] = useState(false)
  const [searchParams] = useSearchParams()
  const cat = searchParams.get('cat') ?? '全部'
  const [limit] = useState(35)
  const [offset, setOffset] = useState(1)
  useEffect(() => {
    const f = (offset - 1) * limit
    dispatch(fetchGetPlayListAction({ cat, limit, offset: f }))
    setIsShowPullDown(false)
  }, [cat, offset])

  function handleOnChange(page: number) {
    window.scrollTo(0, 0)
    setOffset(page)
  }

  async function handleClickPlay(id: number) {
    const res = await getPlayDetail(id)
    const { playlist } = res
    const sid = playlist?.trackIds?.[0]?.id
    dispatch(fetchCurrentSongsAction(sid))
  }

  return (
    <SongsWrapper className="wrap-v2 bg-color-[#fff] p-[40px] min-h-700px !border-b-0">
      {/* 选择分类 */}
      <div className="relative flex justify-between items-start h-40px border-b-2px border-color-[#c20c0c] box-content">
        <div className="flex items-center">
          <div className="text-[24px]">{cat}</div>
          <div className="sprite_button">
            <a
              className="sprite_button flex items-center"
              onClick={() => setIsShowPullDown(!isShowPullDown)}
            >
              <span>选择分类</span>
              <i className="sprite_icon2"></i>
            </a>
          </div>
        </div>
        <div className="hot-btn sprite_button2">
          <a>热门</a>
        </div>
        <PullDown isShowPullDown={isShowPullDown} />
      </div>

      <ul className="playlists">
        {playlistsData?.playlists?.map((item: any) => {
          return (
            <li key={item.id}>
              <div className="relative">
                <img src={getImgUrl(item.coverImgUrl, 140)} />
                <div className="absolute h-27px bottom sprite_cover w-full flex items-center">
                  <i className="sprite_icon"></i>
                  <span>{(item.playCount / 10000).toFixed(0)}万</span>
                  <a
                    className="icon-play sprite_icon"
                    onClick={() => handleClickPlay(item.id)}
                  ></a>
                </div>
              </div>
              <p className="mt-8px mb-3px">
                <a
                  title={item.name}
                  className="block line-clamp-1 text-[#000] text-[14px]"
                >
                  {item.name}
                </a>
              </p>
              <p className="">
                <span className="text-[#999] mr-4px">by</span>
                <a className="max-w-76px text-[#666] align-middle">
                  {'云音乐官方歌单'}
                </a>
                <img
                  className="ml-4px"
                  style={{
                    height: '13px',
                    width: '13px',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                  src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4788940880/1a1f/68f5/b59a/b444b81b88567108ba88194fa29144f5.png"
                ></img>
              </p>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-center">
        <HYPagination
          currentPage={offset}
          total={playlistsData.total}
          pageSize={limit}
          onPageChange={handleOnChange}
        ></HYPagination>
      </div>
    </SongsWrapper>
  )
}
export default memo(Songs)
