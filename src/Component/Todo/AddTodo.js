import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../../Action/todoAction"; // Import API action
import { toast } from "react-toastify";

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("NotStarted");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !dueDate) {
      toast.error("Title and Due Date are required!");
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      currentStatus: status,
      isCompleted: false,
    };

    try {
      setLoading(true);
      await dispatch(addTodo(newTask)); // Call API and dispatch
      toast.success("Task added successfully");
      navigate("/"); // Go back to todo list
    } catch (err) {
      toast.error("Failed to add task ");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">➕ Add New Task</h2>

      <form
        onSubmit={handleSubmit}
        className="shadow p-4 rounded bg-light"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3 text-start">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled
          >
            <option value="NotStarted">Not Started</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary px-4" disabled={loading}>
          {loading ? "Adding..." : "Add Task"}
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
