import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ machines, projects, todos }) => {
  const renderMachines = (machine) => <MachineRow machine={machine} />;
  const renderProjects = (project) => <ProjectRow project={project} />;
  const renderTodos = (todo) => <TodoRow todo={todo} />

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Add Block</h2>
        Add Machine
        Add Project
      </div>
      <div>
        <h2>Machines</h2>
        {machines.map(renderMachines)}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  machines: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  todos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
};

Dashboard.defaultProps = {
  machines: [],
  projects: [],
  todos: []
};

const mapStateToProps = (state) => {
  return {
    machines: state.machines.items,
    projects: state.projects,
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Dashboard);
