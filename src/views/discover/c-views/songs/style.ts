import styled from 'styled-components'

export const SongsWrapper = styled.div`
  border: 1px solid rgba(211, 211, 211, 1);
  border-top: 0;
  .sprite_button {
    background-position: right -100px;
    margin: 0px 0 0 12px;
    padding: 0 5px 0 0;
    height: 31px;
    line-height: 31px;
    cursor: pointer;

    a {
      background-position: 0 -59px;
      padding: 0 10px 0 15px;
      display: flex;
      align-items: center;
      i {
        width: 8px;
        height: 5px;
        margin-left: 5px;
        background-position: -70px -543px;
      }
    }
  }
  .hot-btn {
    height: 29px;
    background-position: 0 0;
    border-radius: 3px;
    cursor: pointer;
    a {
      display: block;
      width: 46px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      color: #fff !important;
    }
  }
`
