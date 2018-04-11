import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
class Home extends React.Component{
    
    render(){
        return (
            <div>
               <App/>
            </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById("root"));

