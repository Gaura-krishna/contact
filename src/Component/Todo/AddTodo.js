import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Not Started");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(), 
      title,
      description,
      dueDate,
      currentStatus: status,
      isCompleted: false,
      isUpdatedAt:null,
      isCreatedAt:new Date().toISOString().split("T")[0]
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
    navigate("/"); 
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">➕ Add New Task</h2>

      <form
        onSubmit={handleSubmit}
        className="shadow p-4 rounded bg-light"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <div className="text-start">
            <label className="form-label ">Title</label>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <div className="text-start">
            <label className="form-label">Description</label>
          </div>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled
          >
            <option value="Not Started">Not Started</option>

          </select>
        </div>

        <button type="submit" className="btn btn-primary px-4">
          <i class="fa-solid fa-clipboard-check"></i> Add Task
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/")}
        >
          <i class="fa-solid fa-xmark"></i> Cancel
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
