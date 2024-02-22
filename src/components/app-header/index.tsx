import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import HeaderTitles from '@/assets/data/header_titles.json'
import { NavLink, useLocation } from 'react-router-dom'
import Search from './search'
interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className="text-[#ccc] h-70px block w-full  pl-19px pr-19px"
        >
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a
          target="_blank"
          rel="noreferrer"
          className="text-[#ccc] h-70px block w-full  pl-19px pr-19px"
          href={item.link}
        >
          {item.title}
        </a>
      )
    }
  }

  const location = useLocation()
  return (
    <div className="h-70px bg-color-[#242424] text-[#fff]">
      <HeaderWrapper>
        <div className="content wrap-v1 flex">
          <HeaderLeft>
            <a className="logo sprite_01" href="/"></a>
            <div className="title-list flex">
              {HeaderTitles.map((item) => {
                return (
                  <div
                    key={item.link}
                    className={`item cursor-pointer relative h-70px leading-70px text-[14px] hover:bg-color-[#000] `}
                  >
                    {showItem(item)}
                  </div>
                )
              })}
            </div>
          </HeaderLeft>
          <HeaderRight className="flex items-center relative">
            <Search />
          </HeaderRight>
        </div>
        {location.pathname.indexOf('/discover') === -1 && (
          <div className="h-5px bg-color-[#C20C0C]"></div>
        )}
      </HeaderWrapper>
    </div>
  )
}
export default memo(AppHeader)
