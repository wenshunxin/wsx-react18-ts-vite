import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import AlbumHeader from './c-cpns/AlbumHeader'
import AlbumTable from './c-cpns/AlbumTable'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { useSearchParams } from 'react-router-dom'
import { fetchAlbumCommentAction, fetchAlbumDetailAction } from './store/action'
import HotComment from '@/components/hot-comment'
interface IProps {
  children?: ReactNode
}

const AlbumDetail: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  const {
    hotComments,
    comments = [],
    total = 0
  } = useAppSelector((state) => state.albumDetail, shallowEqualApp)

  useEffect(() => {
    dispatch(fetchAlbumDetailAction(id))
    dispatch(fetchAlbumCommentAction(id))
  }, [id])
  return (
    <div className="wrap-v2 wrap2">
      <div className="left">
        <AlbumHeader />
        <AlbumTable />
        <HotComment
          hotComments={hotComments}
          comments={comments}
          total={total}
        />
      </div>
      <div className="right"></div>
    </div>
  )
}
export default memo(AlbumDetail)
