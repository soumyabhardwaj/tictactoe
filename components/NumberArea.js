import React from 'react'
import Grid from '@material-ui/core/Grid'

import NumberBox from './NumberBox'

const NumberArea = ({numberAvailable, pickNumber}) => {
  return (
    <Grid container style={styles.root}>
      <Grid item xs={12}>

        <Grid container justify="center">
          {[1, 2, 3].map(value => (
            <NumberBox
              key={value}
              value={value}
              pickNumber={pickNumber}
              numberAvailable={numberAvailable}
            />
          ))}
        </Grid>

        <Grid container justify="center">
          {[4, 5, 6].map(value => (
            <NumberBox
              key={value}
              value={value}
              pickNumber={pickNumber}
              numberAvailable={numberAvailable}
            />
          ))}
        </Grid>

        <Grid container justify="center">
          {[7, 8, 9].map(value => (
            <NumberBox
              key={value}
              value={value}
              pickNumber={pickNumber}
              numberAvailable={numberAvailable}
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
  numberAvailable: {
    textAlign: 'center',
    color: '#0000008a',
    margin: 3,
    //lineHeight:
  },
}

export default NumberArea