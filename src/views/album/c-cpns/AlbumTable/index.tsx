import { TableColumns } from '@/components/table-columns'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Table } from 'antd'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const AlbumTable: FC<IProps> = () => {
  const { songs } = useAppSelector(
    (state) => state.albumDetail,
    shallowEqualApp
  )
  const columns = TableColumns({
    Mv: (
      <a
        className="u_table block"
        style={{
          width: '23px',
          height: '17px',
          margin: '1px 0 0 4px',
          backgroundPosition: ' 0 -151px'
        }}
      ></a>
    )
  })
  return (
    <div className="mt-20px">
      <Table
        bordered
        pagination={false}
        columns={columns}
        dataSource={songs}
        rowKey={(record) => record.id}
      />
    </div>
  )
}
export default memo(AlbumTable)
