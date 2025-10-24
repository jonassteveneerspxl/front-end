import axios from "axios";

const API_URL = "http://localhost:3000/users";

export const getUsers = () => axios.get(API_URL);
export const getUser = (id) => axios.get(`${API_URL}/${id}`);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
export const addUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);
