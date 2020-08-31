import React, { Component } from "react"

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: this.props.date,
            timeZone: this.props.timeZone
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        let dateOptions = {
            timeZone: this.state.timeZone,
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
        }
        let timeOptions = {
            timeZone: this.state.timeZone,
            hour12: false
        }
        let localDate = this.state.date.toLocaleString("en-US", dateOptions)
        let localTime = this.state.date.toLocaleTimeString("en-US", timeOptions)
        return (
            <div>
                <h3>{localDate}</h3>
                <h3>{localTime}</h3>
            </div>
        )
    }
}

export default Clock