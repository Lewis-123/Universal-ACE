import axios from "axios";


const API = axios.create({

    baseURL: process.env.NEXT_PUBLIC_API_URL

});



// GET ALL GROUPS

export const getGroups = async () => {

    const response = await API.get("/groups");

    return response.data;

};




// GET SINGLE GROUP

export const getGroupById = async (id) => {

    const response = await API.get(`/groups/${id}`);

    return response.data;

};




// CREATE GROUP

export const createGroup = async (groupData) => {

    const response = await API.post(
        "/groups",
        groupData
    );

    return response.data;

};




// UPDATE GROUP

export const updateGroup = async (id, groupData) => {

    const response = await API.put(
        `/groups/${id}`,
        groupData
    );

    return response.data;

};




// DELETE GROUP

export const deleteGroup = async (id) => {

    const response = await API.delete(
        `/groups/${id}`
    );

    return response.data;

};