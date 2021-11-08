import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectTask } from "../actions/selectedTaskActions";
import { setTasks, removeTask, markAsDone } from "../actions/tasksActions";
import tasksData from "../tasks";
import NewTaskForm from "./NewTaskForm";

const TaskList = props => {
  const [shouldShowTaskForm, toggleShowTaskForm] = useState(false);
  const { tasks, selectTask, setTasks, removeTask, markAsDone } = props;

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const handleToggleTaskForm = () => {
    toggleShowTaskForm(!shouldShowTaskForm);
  };

  const handleRemoveTask = (e, task) => {
    e.stopPropagation();
    removeTask(task);
  };

  const handleMarkTaskAsDone = (e, task) => {
    e.stopPropagation();
    markAsDone(task);
  };

  return ( <>
<div className="title">To-do Tasks:</div>
    <div className="task-list">
      {tasks.filter(task => task.status === "TO_DO").map((task, i) => (
        <div
          onClick={() => selectTask(task)}
          key={i}
          className="task-list-item"
          task={task}
        >
          <span className="title">{task.title}</span>
          <button onClick={e => handleRemoveTask(e, task)} className="delete">
            X
          </button>
          <button onClick={e => handleMarkTaskAsDone(e, task)} className="delete">
            Mark As Done
          </button>
        </div>
      ))}
      {shouldShowTaskForm ? (
        <NewTaskForm handleToggleTaskForm={handleToggleTaskForm} />
      ) : (
        <div onClick={handleToggleTaskForm} className="task-list-item new">
          + Add New Task
        </div>
      )}
    </div>
    <div className="title">Done Tasks:</div>
        <div className="task-list">
        {tasks.filter(task => task.status === "DONE").map((task, i) => (
          <div
            onClick={() => selectTask(task)}
            key={i}
            className="task-list-item"
            task={task}
          >
            <span className="title">{task.title}</span>
          </div>
        ))}
      </div>
      </>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(
  mapStateToProps,
  { selectTask, setTasks, removeTask, markAsDone }
)(TaskList);

