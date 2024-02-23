import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { MainWrapper } from './style'
import MainHeader from './c-cpns/main-header'
import MainTable from './c-cpns/main-table'
import HotComment from '@/components/hot-comment'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import {
  fetchGetPlaylistCommentAction,
  fetchGetPlaylistDetailAction
} from '../../store/action'
import { useSearchParams } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const PlaylistMain: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { playlistDetail, tracks, hotComments, comments, total } =
    useAppSelector((state) => state.playlist, shallowEqualApp)
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number

  useEffect(() => {
    dispatch(fetchGetPlaylistDetailAction(id))
    dispatch(fetchGetPlaylistCommentAction(id))
  }, [id])
  return (
    <MainWrapper>
      <MainHeader detail={playlistDetail} tracks={tracks} />
      <MainTable tracks={tracks} />
      <HotComment hotComments={hotComments} comments={comments} total={total} />
    </MainWrapper>
  )
}
export default memo(PlaylistMain)
