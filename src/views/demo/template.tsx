import { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}
interface IState {
  message: string
  count: number
}
export default class Demo extends PureComponent<IProps, IState> {
  name = '121212'
  state = {
    message: 'Hello world',
    count: 1000
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>Hello, world!</h1>
        {this.props.name}

        <div>{this.state.message}</div>
        <div>{this.name}</div>
      </div>
    )
  }
}
