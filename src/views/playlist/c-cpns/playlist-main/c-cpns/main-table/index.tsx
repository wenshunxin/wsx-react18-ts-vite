import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Table } from 'antd'
import { TableColumns } from '@/components/table-columns'
interface IProps {
  tracks: any[]
  children?: ReactNode
}

const MainTable: FC<IProps> = (props) => {
  const { tracks } = props
  const columns = [
    ...TableColumns(),
    {
      title: '专辑',
      width: 120,
      render: (_: any, record: any) => {
        return <a className="line-clamp-1">{record.al?.name}</a>
      }
    }
  ]
  return (
    <div className="mt-20px">
      <div className="flex">
        <div className="leading-33px">
          <h2 className="text-[20px] leading-28px">歌曲列表</h2>
        </div>
      </div>
      <Table
        dataSource={tracks}
        bordered
        size={'small'}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
      ></Table>
    </div>
  )
}
export default memo(MainTable)
