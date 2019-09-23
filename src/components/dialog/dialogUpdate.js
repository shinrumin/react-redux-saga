import React, { Component, Fragment } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core'

export default class DialogUpdate extends Component {

  state = {
    txtTitle: '',
    txtDescription: ''
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.task).length > 0) {
      return this.setState({
        txtTitle: nextProps.task.title,
        txtDescription: nextProps.task.description
      })
    }
  }

  _onSubmit = e => {
    // e.preventDefault();
    let { txtTitle, txtDescription } = this.state;
    if (txtTitle.length > 0 && txtDescription.length > 0) {
      console.log(txtTitle, txtDescription)
      let { _id } = this.props.task;
      this.props.updateTaskAction({ _id, title: txtTitle, description: txtDescription });
      this.props.hideDialogAction();
    }
  }

  _onChange = ({ target }) => {
    let { name, value } = target;

    this.setState({
      [name]: value
    })
  }

  render() {
    let { isShowModal, hideDialogAction } = this.props
    return (
      <Fragment>
          <Dialog
            open={isShowModal}
            onClose={hideDialogAction}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

            <DialogTitle id="alert-dialog-title">{"Edit Todo"}</DialogTitle>
            <DialogContent style={{ display: 'flex', justifyContent: 'space-between' }} >
              <TextField
                id="outlined-name"
                label="Title"
                name='txtTitle'
                style={{ marginLeft: 8, marginRight: 8 }}
                value={this.state.txtTitle}
                onChange={this._onChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                style={{ marginLeft: 8, marginRight: 8 }}
                name='txtDescription'
                id="outlined-name"
                label="Description"
                value={this.state.txtDescription}
                onChange={this._onChange}
                margin="normal"
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideDialogAction} color="secondary">cancel</Button>
              <Button onClick={this._onSubmit} color="primary" autoFocus>OKeys</Button>
            </DialogActions>
          </Dialog>
      </Fragment>
    )
  }
}
