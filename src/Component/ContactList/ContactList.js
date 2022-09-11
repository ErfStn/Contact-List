import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import { deleteContact, getContacts } from "../../services/services";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetcjContact = async () => {
        const { data } = await getContacts();
        setContacts(data);
        setAllContacts(data);
      };
      fetcjContact();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filtered = contacts.filter((c) => c.id !== id);
      setContacts(filtered);
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandler = (e) => {
    setSearch(e.target.value);
    const value = e.target.value;
    if (value !== "") {
      const filterContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setContacts(filterContacts);
      console.log(filterContacts);
    } else {
      setContacts(allContacts)
    }
  };
  return (
    <div className="contactList">
      <div className="topNav">
        <h3>Contact List</h3>
        <input
          onChange={changeHandler}
          placeholder="search for..."
          value={search}
        />
        <Link to="add">Add</Link>
      </div>
      {contacts ? (
        contacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              onDelete={deleteContactHandler}
              key={contact.id}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactList;
