import { useState } from "react";

import "./addContact.css";
const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    const value = e.target.value;
    setContact({ ...contact, [e.target.name]: value });
  };
  const submitHandler = (e) => {
    if (!contact.name || !contact.email) {
      alert("All filds are mandatory!");
      return;
    }
    e.preventDefault();
    addContact(contact);
    setContact({ name: "", email: "" });
    // console.log(contact);
  };

  return (
    <form className="form">
      <h2>Add Contact</h2>
      <div className="formControl">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          onChange={changeHandler}
          value={contact.name}
          name="name"
        />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={changeHandler}
          value={contact.email}
          name="email"
        />
      </div>
      <button type="submit" onClick={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default AddContact;
