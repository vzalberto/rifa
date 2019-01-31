import React, { Component } from 'react';
import logo from './luck.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      ballot:[],
      losers: [],
      winner: 0
    }
  }

  componentWillMount(){
    this.initBallot();
  }

  componentDidUpdate(){
    if (this.state.ballot.length === 1){
      const winner = this.state.ballot[0];
      this.setState( state => {
        return {
          ballot : [],
          winner : winner,
        }
      });
    }
  }

  initBallot(){
    this.setState( state => {
      return {ballot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    })
  }

  resetBallot = (event) => {
    event.preventDefault();
    this.setState( state => {
      return {
        ballot : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        losers : [],
        winner : 0
      }
    });
  }

  handleButtonClick = () =>{

    const newLosers = this.state.losers;
    const newBallot = this.state.ballot;
    const newLoser = newBallot.splice(Math.floor(Math.random()*newBallot.length), 1);
    newLosers.push(newLoser[0]);

    this.setState({ballot: newBallot});
    this.setState({losers: newLosers});
  }

  render() {
    let listaPendientes = null;
    let listaPerdedores = null;
    let winnerModal = null;

    if ( this.state.winner !== 0){
      winnerModal = 'Felicidades, número ' + this.state.winner;
    }
    else{

      if( this.state.ballot.length > 1 ){
        listaPendientes = (
          <ul>
            {this.state.ballot.map((el)=>{
              return <li>{el}</li>
            })}
          </ul>
        );
      }
      if( this.state.losers.length > 0 ){
        listaPerdedores = (
          <ul>
            {this.state.losers.map((el)=>{
              return <li>{el}</li>
            })}
          </ul>
        );
      }
  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.handleButtonClick}/>
          <p>
            Haga click en el ícono para sacar números
          </p>

          {listaPendientes}
          {listaPerdedores}
          {winnerModal}

          <a
            className="App-link"
            href="/"
            rel="noopener noreferrer"
            onClick={this.resetBallot}
          >
            Reiniciar
          </a>
        </header>
      </div>
    );
  }
}

export default App;
