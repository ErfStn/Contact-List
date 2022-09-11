import { Link, useLocation } from "react-router-dom";
import "./contactDtail.css"
const ContactDetail = () => {
  const location = useLocation();
  const { name, email, id } = location.state;
  return (
    <div className="contactDetail">
      <p>UserName: {name}</p>
      <p>Email: {email}</p>
      <Link to="/">Back to contact list</Link>
    </div>
  );
};

export default ContactDetail;
