import dayjs from 'dayjs'
import PlayBtn from '@/components/play-btn'
export const TableColumns: any[] = [
  {
    title: '',
    key: 'index',
    render: (_text: string, record: any, index: number) => {
      return (
        <div className="flex items-center">
          <span>{index + 1}</span>
          {record.fee === 1 && (
            <div
              className="sprite_icon2 ml-4px"
              style={{
                width: '15px',
                height: '12px',
                backgroundPosition: '0px 0'
              }}
            ></div>
          )}
        </div>
      )
    }
  },
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
    width: 300,
    render: (text: string, record: any) => {
      return (
        <div className="flex items-center">
          <PlayBtn id={record.id} fee={record.fee}></PlayBtn>
          <a href={`#/discover/player?id=${record.id}`}>{text}</a>
        </div>
      )
    }
  },
  {
    title: '时长',
    dataIndex: 'age',
    key: 'age',
    render: (_: any, record: any) => {
      return <span>{dayjs(new Date(record?.dt)).format('mm:ss')}</span>
    }
  },
  {
    title: '歌手',
    dataIndex: 'address',
    key: 'address',
    render: (_: any, record: any) => {
      return <a className="line-clamp-1">{record?.ar[0].name}</a>
    }
  }
]
