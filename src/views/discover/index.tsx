import { Suspense, memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderNa from '@/assets/data/header_na.json'
import styled from 'styled-components'

const Na = styled.ul`
  .active {
    span {
      background: #9b0909;
    }
  }
`
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div className="h-34px  bg-color-[#C20C0C]">
        <div className="wrap-v1 h-full pl-180px">
          <Na className="na flex">
            {HeaderNa.map((item) => {
              return (
                <NavLink key={item.name} to={item.path}>
                  <li>
                    <span className="block  hover:bg-color-[#9B0909] text-[#fff] h-20px pl-13px pr-13px mt-7px ml-17px mr-17px rounded-20px leading-20px">
                      {item.name}
                    </span>
                  </li>
                </NavLink>
              )
            })}
          </Na>
        </div>
      </div>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  )
}
export default memo(Discover)
