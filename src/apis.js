import axios from "axios";

export const fetchUsers = async () => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return data?.data;
}

export const addUserApi = async (payload) => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`,payload);
    return data?.data;
}