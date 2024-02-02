import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import ArtistHeader from '../artist-header'
import { useSearchParams } from 'react-router-dom'
import artistCategories from '@/assets/data/artist_categories.json'
import { singerAlphas } from '@/utils/tool'
import { CatWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetArtistListAction } from '../../store/action'
import ArtistList from '../artist-list'
interface IProps {
  children?: ReactNode
}

const CatSinger: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as string // 获取URL中的cat参数
  const initial = searchParams.get('initial') as string // 获取URL中的initial参数
  const { artistList } = useAppSelector(
    (state) => state.artist,
    shallowEqualApp
  )
  /**
   * 根据cat参数获取对应的数据
   * @param id id
   * @returns
   */
  interface IArtist {
    name?: string
    area?: number
    type?: number
  }
  function handleGetNameById(id: string) {
    let result: IArtist = {}
    artistCategories.forEach((item) => {
      item.artists.forEach((it) => {
        if (it.id == id) {
          result = {
            area: item.area,
            name: it.name,
            type: it.type
          }
        }
      })
    })
    return result
  }

  useEffect(() => {
    dispatch(
      fetchGetArtistListAction({
        ...handleGetNameById(id),
        initial,
        limit: 100
      })
    )
  }, [id, initial])

  return (
    <CatWrapper>
      <ArtistHeader
        title={id == null ? '' : (handleGetNameById(id)?.name as string)}
      ></ArtistHeader>
      <div className="flex justify-between items-center mt-20px">
        {singerAlphas.map((item, index) => {
          if (item == '-1') item = '热门'
          if (item == '0') item = '其他'
          return (
            <div
              key={index}
              className={`${item === (initial || '热门') ? 'alphas active' : 'alphas'}`}
            >
              <a
                href={`#/discover/artist/cat?id=${id}&initial=${item === '热门' ? -1 : item === '其他' ? 0 : item}`}
              >
                {item}
              </a>
            </div>
          )
        })}
      </div>
      <ArtistList list={artistList} />
    </CatWrapper>
  )
}
export default memo(CatSinger)
