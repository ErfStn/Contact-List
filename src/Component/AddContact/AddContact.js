import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewContact } from "../../services/services";

import "./addContact.css";
const AddContact = ({ addContact }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const value = e.target.value;
    setContact({ ...contact, [e.target.name]: value });
  };

  const submitHandler = async (e) => {
    if (!contact.name || !contact.email) {
      alert("All filds are mandatory!");
      return;
    }
    e.preventDefault();
    try {
      await addNewContact(contact);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
      <div className="btns">
        <Link to="/">
          <button>Back</button>
        </Link>
        <button type="submit" onClick={submitHandler}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddContact;
