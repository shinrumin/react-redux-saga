import React, { Component } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import styles from './styles'
import ItemTaskContainer from '../../redux/containers/ItemTaskContainer'

class ListTask extends Component {


  render() {
    let { classes, tasks } = this.props
    return (
      <Grid container spacing={2} className={classes.listTask}>
        {tasks && tasks.map((item, index) => <ItemTaskContainer key={item._id} task={item} />)}
      </Grid>
    )
  }
}

export default withStyles(styles)(ListTask)
