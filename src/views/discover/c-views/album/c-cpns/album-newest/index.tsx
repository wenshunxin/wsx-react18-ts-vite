import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetAlbumNewestAction } from '../../store/action'
import AlbumItem from '../album-item'
import { UlWrapper } from '../../style'
interface IProps {
  children?: ReactNode
}

const AlbumNewest: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { albumNewestList = [] } = useAppSelector(
    (state) => state.album,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchGetAlbumNewestAction())
  }, [])
  return (
    <UlWrapper>
      {albumNewestList.map((item) => {
        return <AlbumItem key={item.id} {...item}></AlbumItem>
      })}
    </UlWrapper>
  )
}
export default memo(AlbumNewest)
