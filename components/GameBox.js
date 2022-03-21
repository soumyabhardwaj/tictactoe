import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const GameBox = ({grid, boxColors, value, updateBox, player}) => {
  return (
    <Grid item>
      <Paper
        style={{ background: boxColors[value], ...styles.paper, }}
        onClick={() => { updateBox(value) }}
      >
        {grid[value]} {player}
      </Paper>
    </Grid>
  )
}

const styles = {
  paper: {
    padding: 10,
    textAlign: 'center',
    color: '#0000008a',
    width: 100,
    height: 100,
    margin: 6,
    lineHeight: 6,
  },
}

export default GameBox