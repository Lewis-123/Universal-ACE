import axios from "axios";


const API = axios.create({

    baseURL:process.env.NEXT_PUBLIC_API_URL

});





// GROUPS

export const getGroups = async()=>{

    const response = await API.get("/groups");

    return response.data;

};




export const getGroupById = async(id)=>{

    const response = await API.get(`/groups/${id}`);

    return response.data;

};




export const createGroup = async(data)=>{

    const response = await API.post(
        "/groups",
        data
    );

    return response.data;

};




export const updateGroup = async(id,data)=>{

    const response = await API.put(
        `/groups/${id}`,
        data
    );

    return response.data;

};




export const deleteGroup = async(id)=>{

    const response = await API.delete(
        `/groups/${id}`
    );

    return response.data;

};







// MEMBERS


export const getMembersByGroup = async(groupId)=>{


    const response = await API.get(

        `/members/group/${groupId}`

    );


    return response.data;


};




export const createMember = async(data)=>{


    const response = await API.post(

        "/members",

        data

    );


    return response.data;


};






// DASHBOARD


export const getDashboardStats = async()=>{


    const response = await API.get(

        "/dashboard"

    );


    return response.data;


};




export default API;