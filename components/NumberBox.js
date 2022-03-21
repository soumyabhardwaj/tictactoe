import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const NumberBox = ({ value, pickNumber, numberAvailable }) => {
  return (
    <Grid item>
      <Paper style={styles.numberAvailable}>
        <Button
          onClick={() => { pickNumber(value) }}
          disabled={!numberAvailable[value - 1]}
        >{value}
        </Button>
      </Paper>
    </Grid>
  )
}

const styles = {
  numberAvailable: {
    textAlign: 'center',
    margin: 3,
  },
}

export default NumberBox