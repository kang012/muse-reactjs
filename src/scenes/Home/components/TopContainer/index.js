import React from "react"
import ReactDOM from "react-dom"

class TopContainer extends React.Component{
    render(){
        return <div>
                <Sidebar/>
                <MainView/>
            </div>
    }
}

export default TopContainer;