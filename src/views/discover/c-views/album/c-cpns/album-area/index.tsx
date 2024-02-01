import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { UlWrapper } from '../../style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetAlbumListAreaAction } from '../../store/action'
import AlbumItem from '../album-item'
import HYPagination from '@/components/pagination'
import { useSearchParams } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const AlbumArea: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { albumList, albumListTotal } = useAppSelector(
    (state) => state.album,
    shallowEqualApp
  )
  const [searchParams] = useSearchParams()
  const area = searchParams.get('area') as string
  // 获取数据
  const [limit] = useState(30)
  const [offset, setOffset] = useState(1)
  useEffect(() => {
    const n = (offset - 1) * limit
    dispatch(fetchGetAlbumListAreaAction({ limit, offset: n, area }))
  }, [offset, area])

  function onPageChange(page: number) {
    setOffset(page)
  }
  return (
    <UlWrapper>
      {albumList.map((item) => {
        return <AlbumItem key={item.id} {...item}></AlbumItem>
      })}
      <div className="flex justify-center w-full">
        <HYPagination
          currentPage={offset}
          total={albumListTotal}
          onPageChange={onPageChange}
        />
      </div>
    </UlWrapper>
  )
}
export default memo(AlbumArea)
