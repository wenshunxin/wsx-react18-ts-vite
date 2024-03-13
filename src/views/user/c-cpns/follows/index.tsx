import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchUserFollowsAction } from '../../store/actions'
import { getImgUrl } from '../../../../utils/tool'
import { Button, Divider } from 'antd'
interface IProps {
  children?: ReactNode
}

const UserFollows: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { follows = [] } = useAppSelector(
    (state) => state.user,
    shallowEqualApp
  )
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  useEffect(() => {
    dispatch(fetchUserFollowsAction(id))
  }, [id])
  return (
    <div className="mt-20px ">
      <div className="border-b-2 border-color-[#c20c0c] text-[20px] leading-28px text-[#666]">
        关注
      </div>
      <ul className="flex flex-wrap box-content border-l-1 border-b-1 border-color-[#D5D5D5]">
        {follows.map((item: any, index: number) => {
          return (
            <li
              key={index}
              className="pt-20px px-20px h-80px w-407.5px border-r-1 border-color-[#D5D5D5] box-content"
            >
              <div className="flex">
                <a href={`#/user/home?id=${id}`}>
                  <img src={getImgUrl(item.avatarUrl, 60)} />
                </a>
                <div className="w-255px ml-10px ">
                  <p className="flex items-center mb-6px">
                    <a
                      href={`#/user/home?id=${id}`}
                      className="text-[#0c73c2] text-[14px]"
                    >
                      {item.nickname}
                    </a>
                    <img
                      src={getImgUrl(item?.avatarDetail?.identityIconUrl, 15)}
                      className="w-15px h-15px ml-4px"
                    />
                    {item.gender != 0 && (
                      <i
                        className="sprite_icon2 w-14px h-15px ml-4px"
                        style={{
                          backgroundPosition:
                            item.gender === 1 ? '-70px -20px' : '-70px 0'
                        }}
                      ></i>
                    )}
                  </p>
                  <p className="flex items-center mb-8px">
                    <a href={`#/user/event?id=${item.userId}`}>
                      动态
                      <span className="text-[#0c73c2]"> {item.eventCount}</span>
                    </a>
                    <Divider type="vertical"></Divider>
                    <a href={`#/user/follows?id=${item.userId}`}>
                      关注<span className="text-[#0c73c2]">{item.follows}</span>
                    </a>
                    <Divider type="vertical"></Divider>
                    <a href={`#/user/fans?id=${item.userId}`}>
                      粉丝
                      <span className="text-[#0c73c2]">{item.followeds}</span>
                    </a>
                  </p>
                  <p className="line-clamp-1">{item.signature}</p>
                </div>
                <Button type="primary">关注</Button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default memo(UserFollows)
