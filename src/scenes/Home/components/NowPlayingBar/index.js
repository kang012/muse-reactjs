import React from "react"
import ReactDOM from "react-dom"

class NowPlayingBar extends React.Component{
    render(){
        return <div>
                <Sidebar/>
                <MainView/>
            </div>
    }
}

export default NowPlayingBar;