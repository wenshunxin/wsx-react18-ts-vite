import dayjs from 'dayjs'
import PlayBtn from '@/components/play-btn'
import Playing from '@/components/playing'
import { shallowEqualApp, useAppSelector } from '@/store'
//

export const TableColumns = (props?: any) => {
  const { Mv = '' } = props || {}
  const { isPlaying, currentSong } = useAppSelector(
    (state) => state.player,
    shallowEqualApp
  )
  return [
    {
      title: '',
      key: 'index',
      render: (_text: string, record: any, index: number) => {
        return (
          <div className="flex items-center">
            <span>{index + 1}</span>
            {record.fee === 1 && (
              <div
                className="sprite_icon2 ml-4px"
                style={{
                  width: '15px',
                  height: '12px',
                  backgroundPosition: '0px 0'
                }}
              ></div>
            )}
          </div>
        )
      }
    },
    {
      title: '标题',
      dataIndex: 'name',
      key: 'name',
      width: 300,
      render: (text: string, record: any) => {
        return (
          <div className="flex items-center">
            {/* 正在播放并且当前ID和播放的i相等 */}
            {isPlaying && record.id === currentSong?.id ? (
              <Playing />
            ) : (
              <PlayBtn id={record.id} fee={record.fee}></PlayBtn>
            )}
            <a href={`#/discover/player?id=${record.id}`}>{text}</a>
            {record.mv != 0 && Mv(record.mv)}
          </div>
        )
      }
    },
    {
      title: '时长',
      dataIndex: 'age',
      key: 'age',
      render: (_: any, record: any) => {
        return <span>{dayjs(new Date(record?.dt)).format('mm:ss')}</span>
      }
    },
    {
      title: '歌手',
      dataIndex: 'address',
      key: 'address',
      render: (_: any, record: any) => {
        return (
          <a
            className="line-clamp-1 primary"
            href={`#/artist?id=${record?.ar[0].id}`}
          >
            {record?.ar[0].name}
          </a>
        )
      }
    }
  ]
}
