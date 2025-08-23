import { toast } from "react-toastify";
import API from "../config";

// Fetch Todos
export const fetchTodos = () => async (dispatch) => {
  try {
    const { data } = await API.get("/todos");
    dispatch({ type: "SET_TASKS", payload: data });
  } catch (err) {
    console.error(err);
  }
};

// Add Todo
export const addTodo = (task) => async (dispatch) => {
  try {
    const { data } = await API.post("/todos", task);
    dispatch({ type: "ADD_TASK", payload: data });
  } catch (err) {
    console.error(err);
  }
};

// Edit Todo
export const editTodo = (id, task) => async (dispatch) => {
  try {
    const { data } = await API.put(`/todos/${id}`, task);
    dispatch({ type: "EDIT_TASK", payload: data });
  } catch (err) {
    console.error(err);
  }
};

// Delete Todo
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await API.delete(`/todos/${id}`);
    dispatch({ type: "DELETE_TASK", payload: id });
  } catch (err) {
    console.error(err);
  }
};

// Toggle Complete/Incomplete
export const toggleComplete = (id, isCompleted) => async (dispatch) => {
  try {
    const { data } = await API.put(`/todos/${id}`, { isCompleted });
    if (isCompleted) {
      dispatch({ type: "COMPLETE_TASK", payload: id });
      toast.success("Task Updated to Complete");
    } else {
      dispatch({ type: "INCOMPLETE_TASK", payload: id });
      toast.info("Task Updated to Incomplete");
    }
  } catch (err) {
    console.error(err);
  }
};

// Update only status
export const updateCurrentStatus = (id, currentStatus) => async (dispatch) => {
  try {
    const { data } = await API.put(`/todos/${id}/status`, { currentStatus });

    dispatch({
      type: "UPDATE_STATUS",
      payload: { id, currentStatus: data.currentStatus },
    });

    toast.success("Task status updated!");
  } catch (err) {
    console.error(err.response?.data || err.message);
    toast.error("Failed to update task status");
  }
};
