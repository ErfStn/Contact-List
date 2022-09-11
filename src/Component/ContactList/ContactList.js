import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import { deleteContact, getContacts } from "../../services/services";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);

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

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filtered = contacts.filter((c) => c.id !== id);
      setContacts(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contactList">
      <div className="topNav">
        <h3>Contact List</h3>
        <Link to="add">Add</Link>
      </div>
      {contacts ? (
        contacts.map((contact) => {
          return <Contact contact={contact} onDelete={deleteContactHandler} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactList;
