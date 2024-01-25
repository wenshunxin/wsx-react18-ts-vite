import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(http://p1.music.126.net/w3TBRu7yyDyvHurC2GnoKQ==/109951169249731679.jpg?imageView&blur=40x20)
    center center/6000px;

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`

import download from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  display: block;
  width: 254px;
  height: 285px;
  background: url(${download});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
