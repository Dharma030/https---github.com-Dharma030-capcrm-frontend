import axios from 'axios';

const BASE_URL = "https://my-crm-app.onrender.com";
console.log(BASE_URL); // Log the value

export async function userSignUp(data) {
  return axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
}

export async function userSignIn(data) {
  console.log(BASE_URL); // Log the value
  return axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);
}
