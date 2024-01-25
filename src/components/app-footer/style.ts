import styled from 'styled-components'
interface IStyle {
  hPosition: string
  [propName: string]: any
}

export const FooterWrapper = styled.div`
  height: 200px;
  background: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  box-sizing: content-box;
`

export const FooterItem = styled.div<IStyle>`
  cursor: pointer;
  &:hover {
    background-position: ${(props) => props.hPosition} !important;
  }
`
