import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneContact } from "../../services/services";
import "./editContact.css";

const EditContact = ({ editContact }) => {
    const [contact, setContact] = useState({ name: "", email: "" });
    const params = useParams();
  
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
      
      editContact(contact, params.id);
      
    setContact({ name: "", email: "" });

    };
    useEffect(() => {
        const localFetch = async () => {
          try {
            const { data } = await getOneContact(params.id);
            setContact({ name: data.name, email: data.email });
          } catch (error) {
            console.log(error);
          }
        };
        localFetch();
      }, []);
  return (
    <form className="form">
      <h2>Edit Contact</h2>
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
        Edit
      </button>
    </form>
  );
};

export default EditContact;
