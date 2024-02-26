import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchUserPlayListAction } from '../../store/actions'
import { useSearchParams } from 'react-router-dom'
import { getImgUrl } from '@/utils/tool'
interface IProps {
  children?: ReactNode
}

const UserHome: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  /** 获取地址栏中的ID */
  const [searchParams] = useSearchParams()
  /** 类型转化为数字类型 */
  const id = searchParams.get('id') as unknown as number
  const { playlist } = useAppSelector((state) => state.user, shallowEqualApp)

  useEffect(() => {
    dispatch(fetchUserPlayListAction(id))
  }, [id])
  return (
    <ul className="-ml-50px mt-20px flex flex-wrap">
      {/* 渲染用户歌单 */}
      {playlist.map((item: any, index: number) => {
        return (
          <li key={index} className="pl-42px w-140px h-204px box-content">
            <div className="relative w-140px h-140px">
              <a href={'#/playlist?id=' + item.id}>
                <img src={getImgUrl(item.coverImgUrl, 140)} />
                <div
                  className="absolute bottom-0px h-27px bottom sprite_cover w-full flex items-center"
                  style={{
                    backgroundPosition: '0px -537px',
                    color: 'rgb(204, 204, 204)'
                  }}
                >
                  <i
                    className="sprite_icon"
                    style={{
                      width: '14px',
                      height: '11px',
                      backgroundPosition: '0px -24px',
                      margin: '9px 5px 9px 10px'
                    }}
                  ></i>
                  <span>{(item.playCount / 10000).toFixed(0)}万</span>
                  <i className="icon-play sprite_icon"></i>
                </div>
              </a>
            </div>
            <p className="mt-8px mb-3px text-[14px]">
              <a className="leading-20px" href={'#/playlist?id=' + item.id}>
                {item.name}
              </a>
            </p>
          </li>
        )
      })}
    </ul>
  )
}
export default memo(UserHome)
