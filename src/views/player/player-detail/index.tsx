import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PlayerWrapper } from './style'
import {
  fetchDetailPageLyricAction,
  fetchDetailPageSongDetailAction,
  fetchSimPlaylistAction,
  fetchSimSongAction
} from '@/views/player/store'
import { getImgUrl } from '@/utils'
import SimPlaylist from '../c-cpns/sim-playlist'
import SimSong from '../c-cpns/sim-song'
interface IProps {
  children?: ReactNode
}

const PlayerSong: FC<IProps> = () => {
  // 获取路由参数
  const { currentSong, detailPageDetail, lyricIndex, detailPageLyric } =
    useAppSelector((state) => state.player, shallowEqualApp)
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const dispatch = useAppDispatch()

  useEffect(() => {
    id && dispatch(fetchSimPlaylistAction(~~id))
    id && dispatch(fetchSimSongAction(~~id))

    id && dispatch(fetchDetailPageSongDetailAction(~~id))
    id && dispatch(fetchDetailPageLyricAction(~~id))

    console.log(detailPageDetail)
  }, [id])

  return (
    <PlayerWrapper className="wrap-v2  flex">
      <div className="w-710px left flex justify-between">
        <div className="cvr-wrap">
          <div className="sprite_cover u-cover-6  flex items-center justify-center">
            <img
              src={getImgUrl(detailPageDetail?.al?.picUrl, 130)}
              alt="图片"
            />
          </div>
          <div className="flex items-center justify-center mt-20px">
            <i className="sprite_icon2"></i>
            <a
              href={`https://music.163.com/#/outchain/2/${id}/`}
              target="_blank"
              className="text-[#0c73c2]"
            >
              生成外链播放器
            </a>
            {/* <iframe
              frameBorder="no"
              marginWidth={0}
              marginHeight={0}
              width="330"
              height="86"
              src="//music.163.com/outchain/player?type=2&id=1827600686&auto=1&height=66"
            ></iframe> */}
          </div>
        </div>
        <div className="cnt w-414px">
          <div className="flex items-center">
            <i className="u-icn-37 sprite_icon2"></i>
            <span className="tit text-[24px] font-normal ml-7px">
              {detailPageDetail.name}
            </span>
          </div>
          <div className="flex items-center mt-10px mb-10px">
            <i>歌手：</i>
            <a>{detailPageDetail.ar?.[0].name}</a>
          </div>
          <div className="flex items-center mb-10px">
            <i>所属专辑：</i>
            <a>{detailPageDetail.al?.name}</a>
          </div>
          <div className="mt-30px">
            {detailPageLyric.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`leading-23px ${index === lyricIndex && id == currentSong.id ? 'text-[red] origin-0 scale-200 transform' : ''}`}
                >
                  {item.text}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="w-270px right">
        <SimPlaylist />
        <SimSong />
      </div>
    </PlayerWrapper>
  )
}
export default memo(PlayerSong)
