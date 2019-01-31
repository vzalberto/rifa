import React, { Component } from 'react';
import logo from './luck.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      ballot:[],
      winner: null
    }
  }

  componentWillMount(){
    this.initBallot();
  }

  componentWillUpdate(){
    if (this.state.ballot.length === 1){
      const winner = this.state.ballot[0]
      console.log(winner)
    }
  }

  initBallot(){
    this.setState( state => {
      return {ballot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    })
  }

  handleButtonClick = () =>{
    console.log('click')
    let newBallot = this.state.ballot;
    newBallot.pop();
    this.setState({ballot: newBallot})
  }

  render() {
    let lista = null;
    if( this.state.ballot ){
      lista = (
        <ul>
          {this.state.ballot.map((el)=>{
            return <li>{el}</li>
          })}
        </ul>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.handleButtonClick}/>
          <p>
            Haga click en el ícono para sacar números
          </p>

          {lista}

          <a
            className="App-link"
            href="/"
            rel="noopener noreferrer"
          >
            Reiniciar
          </a>
        </header>
      </div>
    );
  }
}

export default App;
