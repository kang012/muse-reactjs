import React from "react"
import ReactDOM from "react-dom"

class UserHome extends React.Component {
    render(){
        return (
            <div>
                <MainView/>                
                <NowPlayingBar/>
            </div>
        )
    }
}

export default UserHome;