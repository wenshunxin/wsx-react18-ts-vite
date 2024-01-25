import { memo, useRef, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { PlayMenuWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchCurrentSongsAction, changeShowPlayMenuAction } from '../store'
import dayjs from 'dayjs'
import { scrollTo } from '@/utils/parse-lyric'
interface IProps {
  children?: ReactNode
}

const AppPlayPanel: FC<IProps> = () => {
  const { playSongList, currentSong, showPlayMenu, lyrics, lyricIndex } =
    useAppSelector((state) => state.player, shallowEqualApp)

  const lyricRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (lyricIndex === -1 || (lyricIndex > 0 && lyricIndex < 3)) return
    scrollTo(lyricRef.current, (lyricIndex - 3) * 32, 260)
  }, [lyricIndex, showPlayMenu])

  const dispatch = useAppDispatch()
  return (
    <div>
      {showPlayMenu && (
        <PlayMenuWrapper>
          <div className="listhd playpanel_bg text-[#fff] flex items-center">
            <div className="flex items-center w-553px justify-between px-20px h-full">
              <h2 className="text-[14px] font-bold">
                播放列表({playSongList.length})
              </h2>
              <div className="flex items-center">
                <span
                  className="sprite_playlist block w-13px  h-13px"
                  style={{ backgroundPosition: '-51px 0' }}
                ></span>
                <span className="ml-4px">清空</span>
              </div>
            </div>
            <div className="flex flex-1 items-center">
              <h2 className="text-[14px] flex-1 font-bold text-center">
                {currentSong.name}
              </h2>
              <div
                className="sprite_playlist w-30px h-30px mr-20px"
                style={{ backgroundPosition: '-195px 9px' }}
                onClick={() =>
                  dispatch(changeShowPlayMenuAction(!showPlayMenu))
                }
              ></div>
            </div>
          </div>
          <div className="listhd playpanel_bg flex">
            <div className="w-553px h-full overflow-y-auto overflow-x-hidden pl-2px">
              {playSongList.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`h-28px hover:bg-color-[#000] text-[#ccc] leading-28px flex items-center ${
                      currentSong.id === item.id
                        ? 'bg-color-[#000] text-[#fff]'
                        : ''
                    } `}
                    onClick={() => dispatch(fetchCurrentSongsAction(item.id))}
                  >
                    <div className="col-1  truncate">
                      <span
                        className={`${
                          currentSong.id === item.id ? 'sprite_playlist' : ''
                        }`}
                      ></span>
                    </div>

                    <div className="flex flex-1 justify-between pr-20px">
                      <div className="w-266px pl-10px overflow-x-hidden truncate">
                        {item.name}
                      </div>

                      <div className="w-80px truncate">{item.ar?.[0].name}</div>
                      <div className="">
                        {dayjs(new Date(item.dt)).format('mm:ss')}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="overflow-y-scroll flex-1" ref={lyricRef}>
              {lyrics.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`text-center leading-32px  ${
                      index === lyricIndex
                        ? 'text-[#fff] text-[16px]'
                        : 'text-[#989898] text-[12px]'
                    }`}
                  >
                    {item.text}
                  </div>
                )
              })}
            </div>
          </div>
        </PlayMenuWrapper>
      )}
    </div>
  )
}
export default memo(AppPlayPanel)
