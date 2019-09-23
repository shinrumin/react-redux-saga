import { connect } from 'react-redux'
import { fetchDataAction, addTaskAction, deleteTaskAction } from '../../actions'
import TaskDashBoard from '../../../components/TaskDashBoard'

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {
  fetchDataAction,
  addTaskAction,
  deleteTaskAction,
})(TaskDashBoard);
