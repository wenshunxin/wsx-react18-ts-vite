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
  function handleOnBlur() {
    setTimeout(() => {
      setShow(false)
    }, 100)
  }
  function handleOnChange(e: any) {
    setValue(e.target.value)
    setShow(e.target.value != '')
    if (value != '') {
      dispatch(fetchGetSearchAction(e.target.value))
    }
  }
  useEffect(() => {
    dispatch(fetchGetSearchAction(value))
  }, [value])
  const map = new Map([
    ['songs', { name: '单曲', position: '-35px -300px' }],
    ['artists', { name: '歌手', position: '-50px -300px' }],
    ['albums', { name: '专辑', position: '-35px -320px' }],
    ['playlists', { name: '歌单', position: '-50px -320px' }]
  ])

  function handleGoRouter(it: any, key: string) {
    let href = ''
    switch (key) {
      case 'songs':
        href = '#/discover/player?id=' + it.id
        break
      case 'artists':
        href = '#/artist?id=' + it.id
        break
      case 'albums':
        href = '#/album?id=' + it.id
        break
      case 'playlists':
        href = '#/playlist?id=' + it.id
        break
      default:
        href = ''
    }
    return href
  }

  return (
    <>
      <Input
        value={value}
        placeholder="音乐/用户"
        className="rounded-32px"
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      ></Input>
      <div className="u-lstat" style={{ display: show ? 'block' : 'none' }}>
        <p>
          <a>搜“{value}”相关用户啊&gt;</a>
        </p>
        {s?.['order']?.map((item: any) => {
          return (
            <div className="itm flex w-fulls" key={item}>
              <h3 className="w-62px flex items-start justify-center pt-10px">
                <i
                  className="sprite_icon2 w-15px h-15px"
                  style={{
                    backgroundPosition: map.get(item)?.position
                  }}
                ></i>
                <span>{map.get(item)?.name}</span>
              </h3>
              <div className="flex-1 leading-24px border-l-1 border-color-[#e2e2e2] border-b-1 pt-6px pb-5px">
                {s[item].map((it: any, index: number) => {
                  return (
                    <a
                      key={index}
                      className="pl-10px flex"
                      href={handleGoRouter(it, item)}
                    >
                      <span className="line-clamp-1 inline-block">
                        {it.name}
                      </span>
                      {item === 'songs' && (
                        <span>-{it?.artists?.[0]?.name}</span>
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default memo(Search)
