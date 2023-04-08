export const Create=(data)=>{
    console.log("Actioncreate")
    return{
        type:"Create",
        payload:data
    }


}

export const Edit=(data)=>{
    console.log("Edit")
    console.log("editdata in contact",data)
    return{
        type:"Edit",
        payload:data
    }
}

export const Delete=(data)=>{
    
    return{
        type:"Delete",
        payload:data
    }
}