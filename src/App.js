import React, { Component } from 'react'
import './App.css'
import Clock from './components/Clock'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Things We Want to Do Together</h1>
                    <h1>&</h1>
                    <h1>Places We Want to Go Together</h1>
                </header>
                <h1>New Yrok</h1>
                <Clock date={new Date()} timeZone={"America/New_York"}/>
                <h1>Hangzhou</h1>
                <Clock date={new Date()} timeZone={"Asia/Shanghai"}/>
            </div>
        )
    }
}

export default App;
