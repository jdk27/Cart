import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/card/card.js'
import AddCart from './components/addCart/addCart.js'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      products: null,
    };
  }
  
  componentDidMount(){
    import('./products.json').then(json => { this.setState({products:json.products})
      console.log(this.state.products)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.products ? 
          <div class="stuff">
          {this.state.products.map((item) => (
            <Card data={item}/>))}
          </div>
        
          :
          <div>
            not loaded yet
          </div>
        }
        
      </div>
    );
  }
}

export default App;
