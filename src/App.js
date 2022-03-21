
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import Header from './components/Header'
import Result from './components/Result'
import BoxArea from './components/BoxArea'
import NumberArea from './components/NumberArea'

class MagicSquare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null, // selected box
      grid: [], // numbers in the grid
      player: Array(9).fill(''),
      boxColors: Array(9).fill('white'), // colors in the grid
      numberAvailable: Array(9).fill(true),
      magicSquare: false,
      showInfo: false, // show info tab
      showGame: true, // show game tab
      activeTab: "game",
      playerState: 'X'
    }
  }

  /** Changes active tab in the navigation */
  changeTab = (event, value) => {
    if (value === 'reset' || value === 'solution')
      return
    this.setState({
      activeTab: value,
    })
  }

  /** User clicks a box */
  updateBox = (id) => {
    let { grid, numberAvailable, player } = this.state
    let number = grid[id]
    // when user clicks a box and if box is already
    // selected and has number in it, remove a number
    if (id === this.state.id && number) {
      numberAvailable[number - 1] = true
      grid[id] = undefined

      this.setState({
        magicSquare: false,
      })
    }
    let boxColors = this.state.boxColors
    // selected box will have a different color, other
    // boxes are white
    boxColors = Array(9).fill('white')
    boxColors[id] = 'lightGrey'

    this.setState({
      id: id,
      boxColors: boxColors,
      grid: grid,
      numberAvailable: numberAvailable,
      showResult: false,
      player: player
    })
  }

  /** User clicks a number */
  pickNumber = (number) => {
    let id = this.state.id
    let grid = this.state.grid
    let player = this.state.player
    let playerState = this.state.playerState
    let numberAvailable = this.state.numberAvailable

    // if none of the boxes is selected
    if (this.state.id === null) {
      return
    }
    // if selected box already has a number
    else if (grid[id]) {
      numberAvailable[grid[id] - 1] = true
    }
    numberAvailable[number - 1] = false
    grid[id] = number
    player[id] = this.state.playerState;
    if (!this.state.magicSquare)
      playerState = this.state.playerState === 'X' ? 'O' : 'X';
    this.setState({
      grid: grid,
      player: player,
      playerState: playerState
    })
    this.checkMagicSquare()
  }

  /* Resets the game */
  reset = () => {
    this.setState({
      grid: [],
      boxColors: Array(9).fill('white'),
      numberAvailable: Array(9).fill(true),
      showResult: false,
    })
  }

  checkMagicSquare = () => {


    const box1 = this.state.grid[0]
    const box2 = this.state.grid[1]
    const box3 = this.state.grid[2]
    const box4 = this.state.grid[3]
    const box5 = this.state.grid[4]
    const box6 = this.state.grid[5]
    const box7 = this.state.grid[6]
    const box8 = this.state.grid[7]
    const box9 = this.state.grid[8]

    const sum1 = box1 + box2 + box3
    const sum2 = box4 + box5 + box6
    const sum3 = box7 + box8 + box9
    const sum4 = box1 + box4 + box7
    const sum5 = box2 + box5 + box8
    const sum6 = box3 + box6 + box9
    const sum7 = box1 + box5 + box9
    const sum8 = box3 + box5 + box7

    const sums = [sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8]
    let MagicSquare = false
    for (let i = 0; i < 9; i++)
      for (let j = 0; j < 9; j++)
        for (let k = 0; k < 9; k++)
          if (i != j && i != k && j != k)
            if (this.state.player[i] == this.state.playerState && this.state.player[j] == this.state.playerState && this.state.player[k] == this.state.playerState)
              if (sums.includes(15))
                MagicSquare = true;

    if (MagicSquare) {
      let boxColors = this.state.boxColors
      boxColors = Array(9).fill('#fab1a0')
      this.setState({
        magicSquare: true,
        boxColors: boxColors,
        showResult: true,
        playerState: this.state.playerState
      })
    } else {
      this.setState({
        showResult: true
      })
    }
  }


  showSolution = () => {
    this.setState({
      grid: [2, 7, 6, 9, 5, 1, 4, 3, 8],
      boxColors: Array(9).fill('#fab1a0'),
      numberAvailable: Array(9).fill(false),
      magicSquare: true,
      showResult: true,
    })
  }

  render() {

    return (
      <div style={styles.root}>

        <Header title="Tic Tac Toe Magic" />

        <Grid container style={styles.container}>

          <Result
            showResult={this.state.showResult}
            magicSquare={this.state.magicSquare}
            winner={this.state.playerState}
          />

          <BoxArea
            boxColors={this.state.boxColors}
            updateBox={this.updateBox}
            grid={this.state.grid}
            player={this.state.player}
          />

          <NumberArea
            numberAvailable={this.state.numberAvailable}
            pickNumber={this.pickNumber}
          />

        </Grid>

      </div>
    )

  }
}

const styles = {
  root: {
    maxWidth: 900,
    margin: 'auto',
  },
  container: {
    flexGrow: 1,
    marginTop: 10,
  },
}

export default MagicSquare