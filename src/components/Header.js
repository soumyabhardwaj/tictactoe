import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = props => {

  return (
    <div>
      <Toolbar style={styles.toolbarMain}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          style={styles.toolbarTitle}
        >
          {props.title}
        </Typography>
      </Toolbar>
    </div>
  )
}

const styles = {
  toolbarMain: {
    borderBottom: '1px solid #e0e0e0',
  },
  toolbarTitle: {
    flex: 1,
    color: 'grey',
    letterSpacing: 2,
  }
}

export default Header