import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ContactList from "./Component/ContactList/ContactList";
import AddContact from "./Component/AddContact/AddContact";
import ContactDetail from "./Component/ContactDetail/ContactDetail";
import {
  addNewContact,
  deleteContact,
  getContacts,
  updateContact,
} from "./services/services";
import EditContact from "./Component/EditContact/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const addContact = async (contact) => {
    try {
      const { data } = await addNewContact(contact);
      setContacts([...contacts, data]);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filtered = contacts.filter((c) => c.id !== id);
      setContacts(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  const editContact = async (contact, id) => {
    try {
      await updateContact(id, contact);
      const { data } = await getContacts();
      setContacts(data);
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    const fetcjContact = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetcjContact();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const fetcjContact = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetcjContact();
    } catch (error) {
      console.log(error);
    }
  }, [contacts]);

  return (
    <div className="App">
      <header className="header">
        <h1>Contact Manager</h1>
        <hr />
      </header>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                onDelete={deleteContactHandler}
              />
            }
          />
          <Route path="user/:id" element={<ContactDetail />} />
          <Route
            path="edit/:id"
            element={<EditContact editContact={editContact} />}
          />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
