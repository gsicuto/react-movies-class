import {Component} from 'react'

// const ShowNumber = (props) => <h1>{props.value}</h1>

class ShowNumber extends Component {
render() {
  return <h1>{this.props.value}</h1>
}
}


export { 
  ShowNumber
 }