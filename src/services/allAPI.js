import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



//upload events
export const uploadEvent = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/events`,reqBody)
}

//upload category
export const addCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
}

//get all upload events
export const getAllEvents = async()=>{
    return await commonAPI('GET',`${serverURL}/events`,"")
}


// to get all categories from jsonserevre
export const getAllCategories = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}


//to delete an event
export const deleteEvent = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/events/${id}`,{})
}

//to delete category

export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}
//to get a particular video from backend
export const getAcard = async(id)=>{
    return await commonAPI('GET',`${serverURL}/events/${id}`,"")
}

// to update the category with new cards
export const updateCategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}

//delete from category
export const deleteCard = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}