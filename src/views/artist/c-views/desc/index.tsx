import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchArtistDescAction } from '../../store/action'
import { useSearchParams } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const ArtistDesc: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  const dispatch = useAppDispatch()
  const { artistDesc: d = {}, artistDetail: ad } = useAppSelector(
    (state) => state.artistDetail,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchArtistDescAction(id))
  }, [])
  return (
    <div>
      <div>
        <h2 className="mb-8px text-[#000] text-[14px] font-bold">
          {ad.artist?.name}简介
        </h2>
        <div className="leading-25px text-[#666] indent-2em">{d.briefDesc}</div>
      </div>
      {d.introduction?.map((item: any, index: number) => {
        return (
          <div key={index}>
            <h2 className="mt-28px mb-8px text-[#000] text-[14px] font-bold">
              {item.ti}
            </h2>
            <div
              className="leading-25px text-[#666] "
              style={{
                whiteSpace: 'pre-wrap' // 保留空格和换行符
              }}
            >
              {item.txt}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default memo(ArtistDesc)
