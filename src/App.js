import './App.css';
import Person from './Components/Person';

import React, {Component} from 'react'

export default class App extends Component{

  constructor (props){
    super(props);
    this.state = {

  show:false,
    };
  }

toggle = () => {
  this.setState( {show: !this.state.show})
}


render () {


  return (
    <div className="App">
      
     <button variant="outline-primary" onClick={this.toggle}>Show Profile</button> 
    {this.state.show ?( <Person/> ): (null )}
    </div>
  );
}
}

