import Axios from 'axios'

const BASE_URL = 'http://localhost:5000/task';

function* getListTask() {
  const tasks = yield Axios.get(`${BASE_URL}/get-list-task`);
  return tasks.data;
}

function* addTask(title, description) {
  const task = yield Axios.post(`${BASE_URL}/add-task`, { title, description});
  return task.data;
}


function* deleteTask(id) {
  const task = yield Axios.post(`${BASE_URL}/delete-task/${id}`);
  return task.data;
}

function* updateTask(id, title, description){
  const editTask = yield Axios.post(`${BASE_URL}/update-task/${id}`, { title, description });
  console.log(editTask)
  return editTask.data;
}

export const API = {
  getListTask,
  addTask,
  deleteTask,
  updateTask
}
