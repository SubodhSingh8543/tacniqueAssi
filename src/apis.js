import axios from "axios";

export const fetchUsers = async () => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return data?.data;
}

export const addUserApi = async (payload) => {
    const data = await axios.post(`https://jsonplaceholder.typicode.com/users`,payload);
    console.log(data.data);
    return data?.data;
}

export const editUserApi = async (payload,id) => {
    const data = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`,payload);
    return data?.data;
}