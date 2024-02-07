import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchArtistAlbumAction } from '../../store/action'
import { useSearchParams } from 'react-router-dom'
import { Image } from 'antd'
import { getImgUrl } from '../../../../utils/tool'
import dayjs from 'dayjs'
import HYPagination from '@/components/pagination'
interface IProps {
  children?: ReactNode
}

const ArtistAlbums: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  const dispatch = useAppDispatch()
  const { artistAlbum: a, albumSize } = useAppSelector(
    (state) => state.artistDetail,
    shallowEqualApp
  )
  const [offset, setOffset] = useState(1)
  useEffect(() => {
    dispatch(
      fetchArtistAlbumAction({ id, limit: 12, offset: (offset - 1) * 12 })
    )
  }, [offset])
  return (
    <div>
      <ul className="-ml-18px flex flex-wrap">
        {a.map((item, index) => {
          return (
            <li key={index} className="w-163px h-205px pl-18px">
              <a
                className="sprite_cover w-145px h-120px block"
                style={{
                  backgroundPosition: '-170px -850px'
                }}
              >
                <Image
                  src={getImgUrl(item.picUrl, 120)}
                  preview={false}
                ></Image>
              </a>
              <p className="mt-8px mb-3px">
                <a>{item.name}</a>
              </p>
              <p>{dayjs(item.publishTime).format('YYYY-MM-DD')}</p>
            </li>
          )
        })}
      </ul>
      <HYPagination
        total={albumSize}
        currentPage={offset}
        pageSize={12}
        onPageChange={(val: number) => setOffset(val)}
      ></HYPagination>
    </div>
  )
}
export default memo(ArtistAlbums)
