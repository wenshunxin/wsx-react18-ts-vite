import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchGetArtistListAction } from '../../store/action'
import { useAppDispatch, useAppSelector } from '@/store'
import ArtistList from '../artist-list'
import ArtistHeader from '../artist-header'
interface IProps {
  children?: ReactNode
}

const ResidentSinger: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { artistList } = useAppSelector((state) => state.artist)

  useEffect(() => {
    dispatch(fetchGetArtistListAction({ limit: 100, cat: '5001' }))
  }, [])
  return (
    <div>
      <ArtistHeader title={'入住歌手'}></ArtistHeader>
      <ArtistList list={artistList} />
    </div>
  )
}
export default memo(ResidentSinger)
