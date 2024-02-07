import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import AlbumHeader from './c-cpns/AlbumHeader'
import AlbumTable from './c-cpns/AlbumTable'
import { useAppDispatch } from '@/store'
import { useSearchParams } from 'react-router-dom'
import { fetchAlbumDetailAction } from './store/action'
interface IProps {
  children?: ReactNode
}

const AlbumDetail: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number

  useEffect(() => {
    dispatch(fetchAlbumDetailAction(id))
  }, [])
  return (
    <div className="wrap-v2 wrap2">
      <div className="left">
        <AlbumHeader />
        <AlbumTable />
      </div>
      <div className="right"></div>
    </div>
  )
}
export default memo(AlbumDetail)
