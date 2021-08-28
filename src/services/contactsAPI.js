import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function postContact(contact) {
  await axios.post(`/contacts`, contact).catch((error) => console.log(error));
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`).catch((error) => console.log(error));
}
