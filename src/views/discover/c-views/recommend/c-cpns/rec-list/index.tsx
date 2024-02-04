import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import RecTitle from '../rec-title'
import { ListWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetThreePlaylistAction } from '../../store/action'
import { getImgUrl } from '@/utils'
interface IProps {
  children?: ReactNode
}

const ResList: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { threePlaylist } = useAppSelector(
    (state) => state.recommend,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchGetThreePlaylistAction())
  }, [])
  return (
    <ListWrapper>
      <RecTitle title="榜单">
        <a href="#/discover/ranking">
          更多<i></i>
        </a>
      </RecTitle>
      <div className="content flex">
        {threePlaylist.map((item, index) => {
          return (
            <dl key={index} className="blk ">
              <dt>
                <div className="top flex">
                  <img
                    src={getImgUrl(item?.playlist?.coverImgUrl, 80)}
                    alt=""
                  />
                  <div className="mt-6px ml-10px">
                    <a className="text-[#333] ">
                      <h3 className="text-[14px] leading-20px font-500">
                        {item.playlist?.name}
                      </h3>
                    </a>
                    <div className="mt-10px flex">
                      <a className="index ply"></a>
                      <a className="index subscribe-flag "></a>
                    </div>
                  </div>
                </div>
              </dt>
              <dd>
                <ol>
                  {item?.playlist?.tracks
                    ?.slice(0, 10)
                    .map((it: any, i: number) => {
                      return (
                        <li key={i} className="!w-full flex-1 !block">
                          <div className="flex !w-full">
                            <span className={i < 3 ? 'no-top' : ''}>
                              {i + 1}
                            </span>
                            <a className="w-170px">{it.name}</a>
                            <div className="oper float-right  mt-7px hidden">
                              <div className="flex  items-center ">
                                <a className="index s-bg-11"></a>
                                <a className="sprite_icon2 u-icn-81"></a>
                                <a className="index s-bg-12"></a>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  <li>
                    <div className="text-right w-full pr-10px">
                      <a href={`#/discover/ranking?id=${item.playlist?.id}`}>
                        查看更多&gt;
                      </a>
                    </div>
                  </li>
                </ol>
              </dd>
            </dl>
          )
        })}
      </div>
    </ListWrapper>
  )
}
export default memo(ResList)
