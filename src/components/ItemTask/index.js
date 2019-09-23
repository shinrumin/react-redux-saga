import React, { Component } from 'react'
import styles from './styles'
import { withStyles, Grid, Card, CardContent, CardActions, Fab, Icon } from '@material-ui/core'

class ItemTask extends Component {

  _onDeleteTask = id => {
    this.props.deleteTaskAction(id)
  }

  _onShowDialogUpdate = () => {
    let { task } = this.props;
    this.props.showDialogAction();
    this.props.getItemToDialogAction(task)
  }

  render() {
    let { classes, task } = this.props;

    return (
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <h1>{task.title}</h1>
            <div>
              <span>
                <p>{task.description}</p>
                <p>{task.status}</p>

              </span>
            </div>
          </CardContent>
          <CardActions className={classes.actionButton}>
            <Fab onClick={() => this._onDeleteTask(task._id)} color='secondary'>
              <Icon>delete_icon</Icon>
            </Fab>
            <Fab onClick={() => this._onShowDialogUpdate()} color='primary'><Icon>edit_icon</Icon></Fab>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}


export default withStyles(styles)(ItemTask)
