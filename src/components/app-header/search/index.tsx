import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { Input } from 'antd'
import { fetchGetSearchAction } from '../store/index'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
interface IProps {
  children?: ReactNode
}

const Search: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const { s } = useAppSelector((state) => state.header, shallowEqualApp)

  function handleOnFocus() {
    setShow(value != '')
  }
  function handleOnChange(e: any) {
    setValue(e.target.value)
    setShow(e.target.value != '')
    if (value != '') {
      dispatch(fetchGetSearchAction(e.target.value))
    }
  }
  useEffect(() => {
    console.log(value)
    dispatch(fetchGetSearchAction(value))
  }, [value])
  const map = new Map([
    ['songs', { name: '单曲', position: '-35px -300px' }],
    ['artists', { name: '歌手', position: '-50px -300px' }],
    ['albums', { name: '专辑', position: '-35px -320px' }],
    ['playlists', { name: '歌单', position: '-50px -320px' }]
  ])
  // 渲染搜索结果
  function handleRender() {
    const order = s?.['order'] || []
    let html = ''
    order.forEach((item: string) => {
      console.log(map.get(item))
      console.log(s[item])
      const { name, position } = map.get(item) as {
        name: string
        position: string
      }
      html += (
        <div className="itm">
          <h3>
            <i style={{ backgroundPosition: position }}></i>
            <span>${name}</span>
          </h3>
        </div>
      )
    })
    console.log(html)
    return html
  }

  return (
    <>
      <Input
        value={value}
        placeholder="音乐/用户"
        className="rounded-32px"
        onChange={handleOnChange}
        onFocus={handleOnFocus}
      ></Input>
      <div className="u-lstlay" style={{ display: show ? 'block' : 'none' }}>
        <p>
          <a>搜“{value}”相关用户啊&gt;</a>
        </p>
        {handleRender()}
      </div>
    </>
  )
}
export default memo(Search)
