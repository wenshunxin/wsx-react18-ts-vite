import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import dayjs from 'dayjs'
import { useSearchParams } from 'react-router-dom'
import { RecommendWrapper } from '../recommend/style'
import { Table } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchGetTopListAction,
  fetchGetTopListDetailAction
} from '../recommend/store/recommend'
import PlayBtn from '@/components/play-btn'
import TopDetail from '../recommend/c-cpns/top-detail'
interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')
  const { topList = [], topListSongs } = useAppSelector(
    (state) => state.recommend
  )
  // 获取当前歌曲
  const { currentSong } = useAppSelector((state) => state.player)
  // 当id为空时，调用dispatch函数，获取排行榜信息
  useEffect(() => {
    dispatch(fetchGetTopListAction())
  }, [])
  // 当id不为空时，调用dispatch函数，获取排行榜详情
  useEffect(() => {
    if (id === null || id === 'undefined') {
      setSearchParams({ id: topList?.[0]?.id })
    }
    if (id != null) {
      dispatch(fetchGetTopListDetailAction(Number(id)))
    }
  }, [id, topList])

  const columns = [
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
            <PlayBtn id={record.id} fee={record.fee}></PlayBtn>
            <a href={`#/discover/player?id=${record.id}`}>{text}</a>
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
        return <span>{record?.ar[0].name}</span>
      }
    }
  ]

  // 渲染菜单项函数
  function renderMenuItem(props: any) {
    return (
      <div
        className={`flex pl-20px pt-10px pb-10px cursor-pointer ${
          id == props.id ? 'bg-color-[#e6e6e6]' : ''
        }`}
        key={props.name}
        onClick={() => setSearchParams({ id: props.id })}
      >
        <img className="w-40px h-40px" src={props.coverImgUrl} />
        <div className="ml-10px flex flex-col justify-between">
          <div className="text-[#000]">{props.name}</div>
          <div className="text-[#999]">{props.updateFrequency}</div>
        </div>
      </div>
    )
  }
  return (
    <RecommendWrapper>
      <div className="content wrap-v2 flex ">
        <div className="w-240px  left">
          <h2
            className="text-[14px] text-[#000]"
            style={{ padding: '0 10px 12px 15px' }}
          >
            云音乐特色榜
          </h2>
          {topList.map((item: any) => {
            return renderMenuItem(item)
          })}
        </div>
        <div className="w-729px right p-30px">
          <TopDetail />
          <Table
            dataSource={topListSongs}
            bordered
            className="mt-20px"
            size={'small'}
            pagination={false}
            columns={columns}
            rowKey={(record) => record.id}
            rowClassName={(record) =>
              record.id == currentSong?.id ? 'currentPlaySong' : ''
            }
          ></Table>
        </div>
      </div>
    </RecommendWrapper>
  )
}
export default memo(Ranking)
