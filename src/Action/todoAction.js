
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: task,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});

export const completeTask = (id) => ({
  type: "COMPLETE_TASK",
  payload: id,
});

export const incompleteTask = (id) => ({
  type: "INCOMPLETE_TASK",
  payload: id,
});

export const updateTask = (id, status) => ({
  type: "UPDATE_STATUS",
  payload: { id, currentStatus: status },
});

export const refreshStatus = () => ({
  type: "REFRESH_STATUS",
});