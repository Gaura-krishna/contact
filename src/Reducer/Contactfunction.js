// Initial Data
const card = [
  {
    id: 0,
    name: "raghav",
    email: "angar@gmail.com",
    phone: "7412589630",
    isCompleted: true,
    taskDate: "2025-08-21", // example task date
    currentStatus: "Done",
  },
  {
    id: 1,
    name: "Manohar",
    email: "Manohar@gmail.com",
    phone: "7854963210",
    isCompleted: false,
    taskDate: "2025-08-25",
    currentStatus: "Not Started",
  },
];



// Reducer
const Phase2 = (state = card, action) => {
  switch (action.type) {
    case "Create":
      return [
        ...state,
        {
          ...action.payload,
          currentStatus: getStatus(action.payload),
        },
      ];

    case "Edit":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...action.payload, currentStatus: getStatus(action.payload) }
          : task
      );

    case "Delete":
      return state.filter((task) => task.id !== action.payload);


    case "UpdateStatus":
      return state.map((task) => ({
        ...task,
        currentStatus: getStatus(task),
      }));

    default:
      return state;
  }
};

export default Phase2;
