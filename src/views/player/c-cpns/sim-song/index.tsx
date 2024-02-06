import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchCurrentSongsAction } from '../../store'
import Playing from '@/components/playing'
interface IProps {
  children?: ReactNode
}

const SimSong: FC<IProps> = () => {
  const {
    simSong,
    currentSong = {},
    isPlaying
  } = useAppSelector((state) => state.player, shallowEqualApp)
  const dispatch = useAppDispatch()
  // 处理播放函数
  function handlePlay(record: any) {
    // 调用dispatch函数，传入fetchCurrentSongsAction函数，参数为record的id
    dispatch(fetchCurrentSongsAction(record?.id))
  }

  return (
    <div>
      <div className="border-b-1px border-color-[#ccc] mb-20px">
        <h3 className="text-[#333] font-bold leading-23px">相似歌曲</h3>
      </div>
      <div>
        {simSong.map((item) => {
          return (
            <div key={item.name} className="mb-10px">
              <div className="flex justify-between items-center overflow-hidden">
                <div className="flex-1 overflow-hidden pr-12px">
                  <div className="text-[#333] truncate">{item.name}</div>
                  <div className="text-[#999] mt-2px">
                    {item?.artists?.[0]?.name}
                  </div>
                </div>
                <div className="flex items-center">
                  {isPlaying && currentSong.id === item.id ? (
                    <Playing />
                  ) : (
                    <i
                      className="sprite_icon3 w-10px h-11px cursor-pointer"
                      title="播放"
                      style={{
                        backgroundPosition: '-69px -455px'
                      }}
                      onClick={() => handlePlay(item)}
                    ></i>
                  )}
                  <i
                    className="sprite_icon3 w-10px h-11px cursor-pointer ml-16px"
                    title="添加到列表"
                    style={{
                      backgroundPosition: '-87px -454px'
                    }}
                  ></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default memo(SimSong)
