import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { Table } from 'antd'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import Playing from '@/components/playing'
import { fetchCurrentSongsAction } from '@/views/player/store'
import dayjs from 'dayjs'
interface IProps {
  children?: ReactNode
}

const DjRadioTable: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const {
    programs = [],
    isPlaying,
    currentSong
  } = useAppSelector((state) => {
    return {
      programs: state.djDetail.programs,
      isPlaying: state.player.isPlaying,
      currentSong: state.player.currentSong
    }
  }, shallowEqualApp)
  return (
    <div className="mt-27px">
      <div className="text-[20px] leading-28px">节目列表</div>
      <Table
        bordered
        showHeader={false}
        pagination={false}
        dataSource={programs}
        columns={[
          {
            title: '标题',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            render: (text: string, record: any) => {
              return (
                <div className="flex items-center justify-between">
                  <div className="flex items-center w-200px">
                    {isPlaying && record?.mainSong?.id === currentSong?.id && (
                      <Playing />
                    )}
                    {record.mainSong?.id != currentSong?.id && (
                      <i
                        className="sprite_table mr-4px w-17px h-17px"
                        style={{
                          backgroundPosition: '0 -103px'
                        }}
                        onClick={() => {
                          dispatch(
                            fetchCurrentSongsAction(record?.mainSong?.id)
                          )
                        }}
                      ></i>
                    )}
                    <a
                      className="line-clamp-1 flex-1"
                      href={`#/program?id=${record?.id}`}
                    >
                      {text}
                    </a>
                  </div>
                  <span className="w-120px">
                    播放：{(record.listenerCount / 10000).toFixed(0)}万
                  </span>
                  <span className="w-120px">赞：{record.likedCount}</span>
                  <span>{dayjs(record.createTime).format('YYYY-MM-DD')}</span>
                  <span>
                    {dayjs(new Date(record?.duration)).format('mm:ss')}
                  </span>
                </div>
              )
            }
          }
        ]}
        rowKey={(record) => record.id}
      ></Table>
    </div>
  )
}
export default memo(DjRadioTable)
