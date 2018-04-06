import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component{
    
//     render(){
//         return <h1> Cyka Blayt</h1>;
//     }
// }

// ReactDOM.render(<App/>, document.getElementById("root"));

ReactDOM.render(
    React.createElement("div", null, "Hello World"), // <div>Hello World</div>
    document.getElementById("root")
  );