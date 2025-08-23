import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleComplete,
  fetchTodos,
  updateTask,
  updateCurrentStatus
} from "../../Action/todoAction";

import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo);

  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    toast.error(" Task deleted!");
  };

  const handleToggleComplete = (task) => {
    dispatch(toggleComplete(task._id, !task.isCompleted));
    // if (task.isCompleted) {
    //   toast.error("Task marked Incomplete");
    // } else {
    //   toast.success("Task marked Complete");
    // }
  };

const handleStatusChange = (id, status) => {
  dispatch(updateCurrentStatus(id, status)); 
};

  useEffect(() => {
    
    dispatch(fetchTodos());
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === "All" || task.currentStatus === statusFilter;

    const matchesDate =
      !dateFilter ||
      new Date(task.dueDate).toDateString() ===
        new Date(dateFilter).toDateString();

    return matchesStatus && matchesDate;
  });

  return (
    <div className="container-fluid p-0 m-0">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center bg-dark text-white px-4 py-3 shadow-sm">
        <h2 className="m-0 fw-bold">📝 To-Do List</h2>
        <Link to="/add">
          <button className="btn btn-light rounded-3 shadow-sm px-3 py-2">
            ➕ Add Task
          </button>
        </Link>
      </div>

      {/* FILTERS */}
      <div className="d-flex flex-wrap align-items-center gap-3 px-4 py-3 bg-light shadow-sm">
        <div>
          <label className="form-label fw-semibold me-2">Filter by Status:</label>
          <select
            className="form-select form-select-sm d-inline-block w-auto"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div>
          <label className="form-label fw-semibold me-2">Filter by Date:</label>
          <input
            type="date"
            className="form-control form-control-sm d-inline-block w-auto"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>

        <button
          className="btn btn-sm btn-outline-secondary ms-auto"
          onClick={() => {
            setStatusFilter("All");
            setDateFilter("");
            toast.info("Filters reset");
          }}
        >
          <i className="fa-solid fa-arrows-spin"></i> Reset Filters
        </button>
      </div>

      {/* TASK CARDS */}
      <div className="row g-0 px-0 py-4">
        {filteredTasks?.map((task) => (
          <div className="col-md-4" key={task._id}>
            <div className="card shadow-sm border-0 h-100 mx-3 my-2">
              <div className="card-body d-flex justify-content-between">
                <div className="text-start">
                  <h5 className="fw-bold">{task.title}</h5>
                  <p className="text-start mb-1">{task.description}</p>
                  <p className="mb-1 text-start">
                    <small className="text-secondary">Due: {task.dueDate}</small>
                  </p>

                  <span
                    className={`badge px-3 py-2 text-start ${
                      task.currentStatus === "Done"
                        ? "bg-success"
                        : task.currentStatus === "Pending"
                        ? "bg-warning text-dark"
                        : task.currentStatus === "In Progress"
                        ? "bg-info text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {task.currentStatus}
                  </span>
                </div>

                {/* DROPDOWN MENU */}
                <div className="dropdown">
                  <button
                    className="btn btn-light border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to={`/edit/${task._id}`}>
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={() => handleDelete(task._id)}
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleToggleComplete(task)}
                      >
                        {task.isCompleted ? (
                          <span className="text-warning">
                            <i className="fa-solid fa-exclamation"></i> Incomplete
                          </span>
                        ) : (
                          <span className="text-success">
                            <i className="fa-solid fa-check"></i> Complete
                          </span>
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">Change Status:</small>
                <select
                  className="form-select form-select-sm w-auto"
                  value={task.currentStatus}
                  onChange={(e) => handleStatusChange(task._id, e.target.value)}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending">Pending</option>
                  {task.isCompleted ? (
                    <option value="Done" disabled>
                      Done
                    </option>
                  ) : null}
                </select>
              </div>
            </div>
          </div>
        ))}

        {tasks?.length === 0 && (
          <div className="text-center text-muted py-5">
            <h5>No tasks available. Add one!</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
