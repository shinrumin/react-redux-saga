import { SHOW_DIALOG, HIDE_DIALOG, DATA_ITEM } from '../actions/actionType';

const initialState = {
  isShowModal: false,
  task: {}
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DIALOG:
      return {
        ...state,
        isShowModal: true
      }
    case HIDE_DIALOG:
      return {
        ...state,
        isShowModal: false
      }
    case DATA_ITEM:
      return {
        ...state,
        task: action.payload
      }
    default: return state;
  }
}

export default taskReducer;
