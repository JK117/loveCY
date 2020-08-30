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
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString("en-US", {timeZone: this.state.timeZone})}</h2>
            </div>
        )
    }
}

export default Clock