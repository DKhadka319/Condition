import React from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

class Square extends React.Component {
  render() {
    return (
      <button
        onClick={()=>this.props.onClick()}
        className="square"
        style={squareStyle}>
 
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>Next player: {this.props.nextPlayer}</div>
        <div className="winner" style={instructionsStyle}>Winner: {this.props.winner ? this.props.winner  === true && this.props.nextPlayer === 'X' ? 'O' : 'X' : 'None'}</div>
        <button style={buttonStyle} onClick={() => this.props.handleReset()}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square value={this.props.board[0]} onClick={()=>this.props.handleClick(0)}/>
            <Square value={this.props.board[1]} onClick={()=>this.props.handleClick(1)}/>
            <Square value={this.props.board[2]} onClick={()=>this.props.handleClick(2)}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={this.props.board[3]} onClick={()=>this.props.handleClick(3)}/>
            <Square value={this.props.board[4]} onClick={()=>this.props.handleClick(4)}/>
            <Square value={this.props.board[5]} onClick={()=>this.props.handleClick(5)}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={this.props.board[6]} onClick={()=>this.props.handleClick(6)}/>
            <Square value={this.props.board[7]} onClick={()=>this.props.handleClick(7)}/>
            <Square value={this.props.board[8]} onClick={()=>this.props.handleClick(8)}/>
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(''),
      isXTurn: true,
    }
  }
  handleClick = (index) => {
    let copyBoard = this.state.board;
    if(copyBoard[index] || this.calculateWinner()){
      return
    }
    copyBoard[index] = this.state.isXTurn ? 'X' : 'O'
    this.setState({board:copyBoard, isXTurn:!this.state.isXTurn})
  }
  calculateWinner = () => {
    let winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]  
    ]

    for(let i =0; i < winningCombinations.length; i++){
      let[a,b,c] = winningCombinations[i]

      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        return true
      }
    }
    return false
  }
  handleReset = () => {
    this.setState({board:Array(9).fill(''), isXTurn: true})
  }
  render() {
    let winner = this.calculateWinner()
    return (
      <div className="game">
        <div className="game-board">
          <Board board={this.state.board} 
            nextPlayer={this.state.isXTurn? 'X' : 'O'}
            handleClick={this.handleClick} 
            winner={winner}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
