// reducer.js

const initialTasks = [
  {
    id: 0,
    title: "Learn Redux",
    description: "Understand actions, reducers, and store",
    dueDate: "2025-08-21",
    isCompleted: false,
    currentStatus: "Not Started",
  },
  {
    id: 1,
    title: "Build Todo App",
    description: "Convert contact manager to todo list",
    dueDate: "2025-08-25",
    isCompleted: false,
    currentStatus: "Pending",
  },
];

const getStatus = (task) => {
  const today = new Date().toISOString().split("T")[0];
  if (task.isCompleted) return "Done";
  if (new Date(today) > new Date(task.dueDate)) return "Pending";
  return task.currentStatus || "Not Started";
};

const todoReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { ...action.payload, currentStatus: getStatus(action.payload) },
      ];

    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...action.payload, currentStatus: getStatus(action.payload) }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "COMPLETE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: true, currentStatus: "Done" }
          : task
      );

   case "INCOMPLETE_TASK":
  return state.map((task) =>
    task.id === action.payload
      ? {
          ...task,
          isCompleted: false,
          currentStatus: "In Progress",
        }
      : task
  );

    case "UPDATE_STATUS":
      return state.map((task) =>
        task.id === action.payload.id
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
