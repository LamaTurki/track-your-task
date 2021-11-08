import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/tasksActions";

const NewTaskForm = props => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    e && e.preventDefault();
    props.addTask(inputs);
    props.handleToggleTaskForm();
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label htmlFor="title">Title</label>
      <br />
      <input
        onChange={handleInputChange}
        name="title"
        type="text"
        placholder="title"
        value={inputs.title}
      />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <input
        onChange={handleInputChange}
        name="description"
        type="textarea"
        placholder="short summary"
        value={inputs.description}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
      <button onClick={() => props.handleToggleTaskForm()}>Cancel</button>
    </form>
  );
};

export default connect(
  undefined,
  { addTask }
)(NewTaskForm);
