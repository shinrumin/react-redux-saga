import React, { Component } from 'react'
import { withStyles, Button, Icon, TextField } from '@material-ui/core'
import styles from './styles'
import ListTask from '../ListTask';
import { toast } from 'react-toastify';
import DialogContainer from '../../redux/containers/dialogContainer/DialogContainer';


class TaskDashBoard extends Component {

  state = {
    task: ''
  }

  componentWillMount() {
    this.props.fetchDataAction();
  }

  _onChange = ({ target }) => {
    let { name, value } = target;

    this.setState({
      [name]: value
    })

  }

  _onAddTask = e => {
    let { task } = this.state;
    if(task) {
      this.props.addTaskAction('Hoc vui', task);
    }else{
      toast.warn('Vui long nhap thong tin day du?');
    }
  }


  render() {
    const { classes, tasks } = this.props;
    return (
      <div>
        <Button onClick={() => this._onAddTask()} variant='contained' color='primary' className={classes.button} >
          <Icon fontSize='default' className={classes.iconButton}>
            add_icon
          </Icon>
          Add Task
        </Button>
        <div>
          <TextField
            label="Add Task"
            className={classes.input}
            name="task"
            margin="normal"
            variant="outlined"
            value={this.state.task}
            onChange={this._onChange}
          />
        </div>
        <div>
          <ListTask tasks={tasks} />
        </div>
        <DialogContainer />


      </div>
    )
  }
}

export default withStyles(styles)(TaskDashBoard);
