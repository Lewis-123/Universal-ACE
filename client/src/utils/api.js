import axios from "axios";



// VERCEL API BASE URL

const API = axios.create({

    baseURL: process.env.NEXT_PUBLIC_API_URL || "/api"

});




// ==========================
// GROUP API FUNCTIONS
// ==========================


// GET ALL GROUPS

export const getGroups = async () => {

    const response = await API.get("/groups");

    return response.data;

};




// GET SINGLE GROUP BY ID

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








// ==========================
// MEMBER API FUNCTIONS
// ==========================


// GET ALL MEMBERS

export const getMembers = async () => {


    const response = await API.get("/members");


    return response.data;


};






// GET MEMBERS BY GROUP

export const getMembersByGroup = async (groupId) => {


    const response = await API.get(

        `/members/group/${groupId}`

    );


    return response.data;


};






// GET SINGLE MEMBER

export const getMemberById = async (id) => {


    const response = await API.get(

        `/members/${id}`

    );


    return response.data;


};







// CREATE MEMBER

export const createMember = async (memberData) => {


    const response = await API.post(

        "/members",

        memberData

    );


    return response.data;


};








// UPDATE MEMBER

export const updateMember = async (id, memberData) => {


    const response = await API.put(

        `/members/${id}`,

        memberData

    );


    return response.data;


};







// DELETE MEMBER

export const deleteMember = async (id) => {


    const response = await API.delete(

        `/members/${id}`

    );


    return response.data;


};









// ==========================
// DASHBOARD API FUNCTIONS
// ==========================


// GET DASHBOARD STATISTICS

export const getDashboardStats = async () => {


    const response = await API.get(

        "/dashboard"

    );


    return response.data;


};






export default API;