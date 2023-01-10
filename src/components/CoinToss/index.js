// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {index: 0, count: 0, head: 0, tail: 0}

  onClickButton = () => {
    const ind = Math.floor(Math.random() * 2)
    this.setState({index: ind})
    this.setState(prevState => ({count: prevState.count + 1}))
    if (ind === 0) {
      this.setState(prevState => ({
        head: prevState.head + 1,
      }))
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1}))
    }
  }

  render() {
    const {index, count, head, tail} = this.state
    const img = ['heads', 'tails']
    const toss =
      img[index] === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={toss} alt="toss result" className="img" />
          <button onClick={this.onClickButton} type="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total:{count}</p>
            <p>Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
