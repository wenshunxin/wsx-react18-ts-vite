import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { MainWrapper } from './style'
import MainHeader from './c-cpns/main-header'
import MainTable from './c-cpns/main-table'
import HotComment from '@/components/hot-comment'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetPlaylistDetailAction } from '../../store/action'
import { useSearchParams } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const PlaylistMain: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { playlistDetail, tracks } = useAppSelector(
    (state) => state.playlist,
    shallowEqualApp
  )
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number

  useEffect(() => {
    dispatch(fetchGetPlaylistDetailAction(id))
  }, [])
  return (
    <MainWrapper>
      <MainHeader detail={playlistDetail} />
      <MainTable tracks={tracks} />
      <HotComment />
    </MainWrapper>
  )
}
export default memo(PlaylistMain)
