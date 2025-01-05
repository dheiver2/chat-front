import axios from 'axios';

export const api = axios.create({
	baseURL: "https://chat-api-jubp.onrender.com",
});
