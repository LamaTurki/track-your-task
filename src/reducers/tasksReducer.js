const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload.tasks;
    case "ADD_TASK":
      let newTask = action.payload.task;
      newTask.status = "TO_DO";
      return [...tasks, newTask];
    case "REMOVE_TASK":
      let newTasks = [...tasks];
      newTasks.splice(tasks.indexOf(action.payload.task), 1);
      return newTasks;
    case "MARK_AS_DONE_TASK":
      let newTaskList = [...tasks];
      const objIndex = tasks.indexOf(action.payload.task)
      const updatedObj = { ...tasks[objIndex], status: "DONE"};
      newTaskList.splice(objIndex, 1);
      return [...newTaskList, updatedObj];
    default:
      return tasks;
  }
};

export default tasksReducer;
