import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchGetTopArtistListAction } from '../../store/action'
import ArtistList from '../artist-list'
import ArtistHeader from '../artist-header'
interface IProps {
  children?: ReactNode
}

const RecommendedSinger: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { topArtistList } = useAppSelector(
    (state) => state.artist,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchGetTopArtistListAction({ limit: 100 }))
  }, [])
  return (
    <div>
      <ArtistHeader title={'推荐歌手'}></ArtistHeader>
      <ArtistList list={topArtistList}></ArtistList>
    </div>
  )
}
export default memo(RecommendedSinger)
