// helper to derive status
const getStatus = (task) => {
  const today = new Date().toISOString().split("T")[0];
  if (task.isCompleted) return "Completed";
  if (new Date(today) > new Date(task.dueDate) && !task.isCompleted) return "Pending";
  return task.currentStatus || "Not Started";
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload.map((task) => ({
        ...task,
        currentStatus: getStatus(task),
      }));

    case "ADD_TASK":
      return [
        ...state,
        { ...action.payload, currentStatus: getStatus(action.payload) },
      ];

    case "EDIT_TASK":
      return state.map((task) =>
        task._id === action.payload._id
          ? { ...action.payload, currentStatus: getStatus(action.payload) }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task._id !== action.payload);

    case "COMPLETE_TASK":
      return state.map((task) =>
        task._id === action.payload
          ? { ...task, isCompleted: true, currentStatus: "Completed" }
          : task
      );

    case "INCOMPLETE_TASK":
      return state.map((task) =>
        task._id === action.payload
          ? { ...task, isCompleted: false, currentStatus: "In Progress" }
          : task
      );

    case "UPDATE_STATUS":
      return state.map((task) =>
        task._id === action.payload.id
          ? { ...task, currentStatus: action.payload.currentStatus }
          : task
      );

    case "REFRESH_STATUS":
      return state.map((task) => ({
        ...task,
        currentStatus: getStatus(task),
      }));

    default:
      return state;
  }
};

export default todoReducer;
