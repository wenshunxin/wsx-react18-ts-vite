import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchDjProgramAction, fetchDjRadioAction } from './store/action'
import DjRadioHeader from './c-cpns/header'
import DjRadioTable from './c-cpns/table'
interface IProps {
  children?: ReactNode
}

const DjRadio: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number

  useEffect(() => {
    dispatch(fetchDjRadioAction(id))
    dispatch(fetchDjProgramAction(id))
  }, [id])
  return (
    <div className="wrap2 wrap-v2">
      <div className="left">
        <DjRadioHeader />
        <DjRadioTable />
      </div>
      <div className="right"></div>
    </div>
  )
}
export default memo(DjRadio)
