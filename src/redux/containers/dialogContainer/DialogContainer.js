import { connect } from 'react-redux'
import { hideDialogAction, updateTaskAction } from '../../actions'
import DialogUpdate from '../../../components/dialog/dialogUpdate'

const mapStateToProps = (state) => {
  console.log({modal: state.modal})
  return {
    isShowModal: state.modal.isShowModal || false,
    task: state.modal.task
  }
}

export default connect(mapStateToProps, { hideDialogAction, updateTaskAction })(DialogUpdate);
