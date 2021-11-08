export const selectTask = selectedTask => {
  // Return an action
  return {
    type: "SELECT_TASK",
    payload: { selectedTask }
  };
};

