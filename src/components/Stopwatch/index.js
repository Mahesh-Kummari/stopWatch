// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {timeInSeconds: 0, isTimerOn: false}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  onStartTimer = () => {
    this.setState(prevState => ({
      isTimerOn: !prevState.isTimerOn,
    }))

    this.timerId = setInterval(this.timer, 1000)
  }

  timer = () => {
    const {isTimerOn} = this.state
    if (isTimerOn) {
      this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
    }
  }

  onStopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerOn: false})
  }

  onResetTimer = () => {
    clearInterval(this.timerId)
    this.setState({timeInSeconds: 0, isTimerOn: false})
  }

  getTimeInMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getTimeInSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = timeInSeconds % 60
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const formattedTime = `${this.getTimeInMinutes()}:${this.getTimeInSeconds()}`

    return (
      <div className="bg-container">
        <div className="main-card">
          <h1 className="hero-heading">Stopwatch</h1>
          <div className="timer-card">
            <div className="time-image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="time">{formattedTime}</h1>
            <div className="buttons-card">
              <button
                type="button"
                className="button start-btn"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-btn"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-btn"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
