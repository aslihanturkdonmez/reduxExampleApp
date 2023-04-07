import axios from 'axios';

const BASE_URL = 'https://randomuser.me/api/';

export const fetchUsers = async (results: number) => {
  console.log(results);
  const res = await axios.get(`${BASE_URL}?results=${results}`);
  return res;
};
