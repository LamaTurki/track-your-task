import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import selectedTaskReducer from "./selectedTaskReducer";

export default combineReducers({
  tasks: tasksReducer,
  selectedTask: selectedTaskReducer
});