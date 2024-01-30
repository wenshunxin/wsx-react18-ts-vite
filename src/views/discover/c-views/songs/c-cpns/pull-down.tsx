import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { PullDownWrap } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetActListAction } from '../store'
interface IProps {
  isShowPullDown: boolean
  children?: ReactNode
}

const PullDown: FC<IProps> = ({ isShowPullDown }) => {
  const dispatch = useAppDispatch()
  const { catList } = useAppSelector((state) => state.songs, shallowEqualApp)

  useEffect(() => {
    // 获取分类列表
    dispatch(fetchGetActListAction())
  }, [])
  return (
    <PullDownWrap
      isShowPullDown={isShowPullDown}
      className="absolute w-720px  bg-color-[#fff]"
    >
      <div className="top">
        <i className="sprite_icon"></i>
      </div>
      <div className="bottom">
        <h3>
          <i className="sprite_button2">全部风格</i>
        </h3>
        <div>
          {catList.map((item: any) => {
            return (
              <div key={item.name}>
                <div className="flex">
                  <div className="flex">
                    <i className="sprite_icon2" style={item.style}></i>
                    <i>{item.name}</i>
                  </div>
                  <div className="flex flex-wrap">
                    {item.list.map((it: any) => {
                      return (
                        <span key={it.name}>
                          <a href={'/discover/songs?cat=' + it.name}>
                            {it.name}
                          </a>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="ft"></div>
    </PullDownWrap>
  )
}
export default memo(PullDown)
