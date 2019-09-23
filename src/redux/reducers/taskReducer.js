import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_TASK_SUCCESS, ADD_TASK_FAILURE, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE, UPDATE_TASK_FAILURE, UPDATE_TASK_SUCCESS } from "../actions/actionType";
import { toast } from 'react-toastify';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return [ ...action.payload];
    case FETCH_DATA_FAILURE:
      return [];
    case ADD_TASK_SUCCESS:
      toast.success('them thanh cong')
      return [
        ...state,
        action.payload
      ]
    case ADD_TASK_FAILURE:
      return toast.error('Add khong thanh cong')
    case DELETE_TASK_SUCCESS:
      toast.success('delete thanh cong')
      const newTasks = state.filter(item => item._id !== action.payload)
      return [
        ...newTasks
      ]
    case DELETE_TASK_FAILURE:
      toast.error('delete khong thanh cong')
      return state;
    case UPDATE_TASK_SUCCESS:
      toast.success('update task thanh cong');
      return state;
    case UPDATE_TASK_FAILURE:
      toast.error('update thong thanh cong')
      return state
    default: return state;
  }
}

export default taskReducer;
