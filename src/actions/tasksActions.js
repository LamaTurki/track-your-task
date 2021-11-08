export const addTask = task => {
  return {
    type: "ADD_TASK",
    payload: { task }
  };
};

export const removeTask = task => {
  return {
    type: "REMOVE_TASK",
    payload: { task }
  };
};

export const markAsDone = task => {
  return {
    type: "MARK_AS_DONE_TASK",
    payload: { task }
  };
};
  
export const setTasks = tasks => {
  return {
    type: "SET_TASKS",
    payload: { tasks }
  };
};

