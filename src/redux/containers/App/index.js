import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../commons/theme'
import TaskDashBoardContainer from '../TaskListContainer'
import { Provider } from 'react-redux'
import store from '../../stores'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Provider store={store}>
          <TaskDashBoardContainer />
        </Provider>
      </ThemeProvider>
    )
  }
}

export default withStyles(styles)(App);
