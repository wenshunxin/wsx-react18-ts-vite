import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RecommendWrapper } from '../recommend/style'
import { Table } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchGetTopListAction,
  fetchGetTopListDetailAction
} from '../recommend/store/recommend'
import TopDetail from '../recommend/c-cpns/top-detail'
import { TableColumns } from '@/components/table-columns'
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

  const columns = TableColumns()

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
          ></Table>
        </div>
      </div>
    </RecommendWrapper>
  )
}
export default memo(Ranking)
