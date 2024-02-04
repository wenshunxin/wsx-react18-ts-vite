import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ResTitleWrapper } from './style'
interface IProps {
  title: string
  children?: ReactNode
}

const RecTitle: FC<IProps> = (props) => {
  const { title, children } = props
  return (
    <ResTitleWrapper className="v-hd2 flex justify-between items-center">
      <a className="tit">{title}</a>
      {children}
    </ResTitleWrapper>
  )
}
export default memo(RecTitle)
