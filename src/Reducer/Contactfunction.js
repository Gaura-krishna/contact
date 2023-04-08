
const card = [
    {"id":0,"name":"raghav","email":"angar@gmail.com","Phone":"7412589630"},
    {"id":1,"name":"Manhor","email":"Manohar@gmail.com","Phone":"7854963210"}
]


const Phase2 = (state = card, action) => {

    switch (action.type) {
        case "Create":
            console.log("reducer")
            const createstate = [...state, action.payload]
            state = createstate
            console.log("reducer",state)
            return state;

        case "Edit":
            
            const editstate = state.map(contacts => contacts.id === action.payload.id ? action.payload : contacts);
            state = editstate;
            return state;

        case "Delete":
            console.log("delete",state)
            const deletestate = state.filter((contacts)=>{
                return contacts.id !== action.payload && contacts
            });
            console.log("deletestate",deletestate)
            state = deletestate;
            return state;

        default: return state;

    }
}
export default Phase2