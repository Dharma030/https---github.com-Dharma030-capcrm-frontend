import axios from "axios";

const BASE_URL = "https://my-crm-app.onrender.com";

export async function getAllTickets(data) {
  return axios.get(`${BASE_URL}/crm/api/v1/tickets`, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
}

export async function updateTicket(ticket) {
  return axios.put(`${BASE_URL}/crm/api/v1/tickets/${ticket._id}`, ticket, {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
}

export async function createNewTicket(ticket) {

  return axios.post(`${BASE_URL}/crm/api/v1/tickets/`, ticket, {
    headers: {
      'x-access-token': localStorage.getItem("token")
    }
  })
}
