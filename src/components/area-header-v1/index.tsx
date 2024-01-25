import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AreaHeaderV1Wrapper } from './style'
interface IProps {
  children?: ReactNode
}

const AreaHeaderV1: FC<IProps> = () => {
  return <AreaHeaderV1Wrapper>AreaHeaderV1</AreaHeaderV1Wrapper>
}
export default memo(AreaHeaderV1)
