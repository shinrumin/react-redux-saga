import { connect } from 'react-redux'
import { deleteTaskAction, showDialogAction, getItemToDialogAction } from '../../actions'
import ItemTask from '../../../components/ItemTask'

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { deleteTaskAction, showDialogAction, getItemToDialogAction  })(ItemTask);
