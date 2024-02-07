import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchArtistMvAction } from '../../store/action'
import { Image } from 'antd'
import { getImgUrl } from '../../../../utils/tool'
interface IProps {
  children?: ReactNode
}

const ArtistMv: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number

  const { artistMv: m } = useAppSelector(
    (state) => state.artistDetail,
    shallowEqualApp
  )
  const [offset] = useState(1)
  useEffect(() => {
    dispatch(fetchArtistMvAction({ id, limit: 16, offset: (offset - 1) * 12 }))
  }, [])
  return (
    <div>
      <ul className="mt-20px -ml-29px flex flex-wrap">
        {m.map((item) => {
          return (
            <li
              key={item.id}
              className="w-137px h-140px pl-29px box-content pb-30px"
            >
              <div className="u-cover relative">
                <Image src={getImgUrl(item.imgurl, 137, 103)} preview={false} />
                <a
                  className="sprite_icon absolute w-44px h-44px block top-1/2 left-1/2 -ml-22px -mt-22px"
                  style={{
                    backgroundPosition: '-30px -135px'
                  }}
                ></a>
              </div>
              <a>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default memo(ArtistMv)
