import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';

export const findAllTuits = async () => {
 const response = await axios.get(TUITS_API);
 const tuits = response.data;
 return tuits;
}

export const createTuit = async (tuit) => {
 const response = await axios.post(TUITS_API, tuit)
 return response.data;
}

export const deleteTuit = async (tuit) => {
 const response = await axios
   .delete(`${TUITS_API}/${tuit._id}`);
 return response.data;
}

export const updateTuit = async (tuit) => {}
