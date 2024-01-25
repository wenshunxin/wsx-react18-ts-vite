import { Slider } from 'antd'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const onChangeComplete = (value: number) => {
    console.log(value)
  }
  return (
    <div>
      <Slider onChangeComplete={onChangeComplete}></Slider>
    </div>
  )
}
export default memo(HotRecommend)
