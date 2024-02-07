import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchArtistHitAction } from '../../store/action'
import { Table } from 'antd'
import { TableColumns } from '@/components/table-columns'
interface IProps {
  children?: ReactNode
}

const ArtistHit: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { artistHit: h } = useAppSelector(
    (state) => state.artistDetail,
    shallowEqualApp
  )
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  const columns = [
    ...TableColumns({
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
  ]

  useEffect(() => {
    dispatch(fetchArtistHitAction(id))
  }, [id])
  return (
    <div>
      <Table
        dataSource={h}
        columns={columns}
        pagination={false}
        bordered
        rowKey={(record) => record.id}
      ></Table>
    </div>
  )
}
export default memo(ArtistHit)
