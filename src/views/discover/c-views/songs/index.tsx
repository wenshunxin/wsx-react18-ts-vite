import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { SongsWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetActListAction } from './store'
interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { catList } = useAppSelector((state) => state.songs, shallowEqualApp)

  useEffect(() => {
    // 获取分类列表
    dispatch(fetchGetActListAction())
    console.log(catList)
  }, [])

  return (
    <SongsWrapper className="wrap-v2 bg-color-[#fff] p-[40px]">
      {/* 选择分类 */}
      <div className="relative flex justify-between items-start h-40px border-b-2px border-color-[#c20c0c] box-content">
        <div className="flex items-center">
          <div className="text-[24px]">全部</div>
          <div className="sprite_button">
            <a className="sprite_button flex items-center">
              <span>选择分类</span>
              <i className="sprite_icon2"></i>
            </a>
          </div>
        </div>
        <div className="hot-btn sprite_button2">
          <a>热门</a>
        </div>
      </div>
    </SongsWrapper>
  )
}
export default memo(Songs)
