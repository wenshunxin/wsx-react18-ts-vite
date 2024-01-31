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
          <a href={'#/discover/songs?cat=全部'}>
            <i className="sprite_button2">全部风格</i>
          </a>
        </h3>
        <div>
          {catList.map((item: any) => {
            return (
              <div key={item.name}>
                <div className="flex">
                  <div className="flex w-96px mt-15px  flex  justify-end">
                    <div className="w-70px flex">
                      <i className="sprite_icon2" style={item.style}></i>
                      <i className="font-bold ml-8px">{item.name}</i>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-wrap pt-16px px-15px border-l-1 border-color-[#e6e6e6] leading-24px">
                    {item.list.map((it: any) => {
                      return (
                        <span key={it.name}>
                          <a
                            className="text-[#333]"
                            href={'#/discover/songs?cat=' + it.name}
                          >
                            {it.name}
                          </a>
                          <span className="text-[#d8d8d8] mr-8px ml-10px">
                            |
                          </span>
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
