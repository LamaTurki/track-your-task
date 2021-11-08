import React, { Component } from "react";
import TaskList from "./TaskList";
import TaskInfo from "./TaskInfo";

class App extends Component {
  render() {
    return (
      <main className="task-container">
        <TaskList />
        <TaskInfo />
      </main>
    );
  }
}

export default App;
