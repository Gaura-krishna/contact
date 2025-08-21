import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditTodo = () => {
  const { id } = useParams(); // Get task id from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.todo);
  const task = tasks.find((task_item) => task_item.id === parseInt(id || "", 10));

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Not Started");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setStatus(task.currentStatus);
    }
  }, [task]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        id: task.id,
        title,
        description,
        dueDate,
        currentStatus: status,
      },
    });
    navigate("/"); 
  };

  if (!task) {
    return <div className="text-center mt-5">⚠️ Task not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">✏️ Edit Task</h2>

      <form
        onSubmit={handleUpdate}
        className="shadow p-4 rounded bg-light"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
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
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary px-4">
          <i class="fa-solid fa-file"></i> Save Changes
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

export default EditTodo;
