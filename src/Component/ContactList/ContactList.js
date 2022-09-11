import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contactList">
      <div className="topNav">
        <h3>Contact List</h3>
        <Link to="add">Add</Link>
      </div>
      {contacts.map((contact) => {
        return <Contact contact={contact} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default ContactList;