import React from 'react'
import Grid from '@material-ui/core/Grid'

import GameBox from './GameBox'

const BoxArea = ({boxColors, updateBox, grid, player}) => {

  return (
    <Grid container style={styles.root}>

      <Grid item xs={12}>

        <Grid container justify="center">
          {[0, 1, 2].map(value => (
            <GameBox
              key={value}
              value={value}
              grid={grid}
              boxColors={boxColors}
              updateBox={updateBox}
              player={player}
            />
          ))}
        </Grid>

        <Grid container justify="center">
          {[3, 4, 5].map(value => (
            <GameBox
              key={value}
              value={value}
              grid={grid}
              boxColors={boxColors}
              updateBox={updateBox}
              player={player}
            />
          ))}
        </Grid>

        <Grid container justify="center">
          {[6, 7, 8].map(value => (
            <GameBox
              key={value}
              value={value}
              grid={grid}
              boxColors={boxColors}
              updateBox={updateBox}
              player={player}
            />
          ))}
        </Grid>

      </Grid>
    </Grid>
  )
}

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
}

export default BoxArea