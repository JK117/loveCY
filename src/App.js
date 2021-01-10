import React, { Component } from 'react'
import './App.css'
import Clock from './components/Clock'
import BasicTimeline from './components/BasicTimeline'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>A Tale of Two Cities</h1>
                </header>
                <div className="Clock-list" style={{display:'flex',justifyContent:'space-around'}}>
                    <div className="Clock">
                        <h2>New York</h2>
                        <Clock date={new Date()} timeZone={"America/New_York"}/>
                    </div>
                    <div className="Clock">
                        <h2>Hangzhou</h2>
                        <Clock date={new Date()} timeZone={"Asia/Shanghai"}/>
                    </div>
                </div>
                <div className="Basic Timeline">
                    <BasicTimeline />
                </div>
            </div>
        )
    }
}

export default App;
