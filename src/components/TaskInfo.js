import React from "react";
import { connect } from "react-redux";

const TaskInfo = ({ selectedTask }) => {

  return (
    <div className="task-info-container">
      {selectedTask ? (
        <>
          <h2>{selectedTask.title}</h2>
          <div className="task-info">
            <div>
              <hr />
              <p>{selectedTask.description}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedTask: state.selectedTask
  };
};

export default connect(mapStateToProps)(TaskInfo);

