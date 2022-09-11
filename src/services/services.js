import http from "./httpServices";

export function getContacts() {
  return http.get("/contacts");
}

export function deleteContact(contactId) {
  return http.delete(`/contacts/${contactId}`);
}
export function addNewContact(data) {
  const token = "SECURE TOKEN!";
  const header = {
    headers: {
      Authorization: `BEARER ${token}`,
    },
  };
  return http.post("/contacts/", data, header);
}
export function getOneContact(id) {
  return http.get(`/contacts/${id}`);
}

export function updateContact(id,data) {
  return http.put(`/contacts/${id}`,data);
}
