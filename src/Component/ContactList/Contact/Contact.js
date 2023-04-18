import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.png";
import "./contact.css";

const Contact = ({ contact, onDelete }) => {
	const { name, email, id } = contact;
	return (
		<div key={id} className="contact">
			<Link to={`user/${id}`} state={contact} className="link">
				<img src={avatar} alt="user" />

				<p>{name}</p>
				<p>{email}</p>
			</Link>
			<div className="btn">
				<Link to={`/edit/${id}`}>
					<button>Edit</button>
				</Link>
				<button onClick={() => onDelete(id)}>Delete</button>
			</div>
		</div>
	);
};

export default Contact;
