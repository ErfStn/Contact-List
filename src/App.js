import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactList from "./Component/ContactList/ContactList";
import AddContact from "./Component/AddContact/AddContact";
import ContactDetail from "./Component/ContactDetail/ContactDetail";
import EditContact from "./Component/EditContact/EditContact";
import NotFound from "./Component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Contact Manager</h1>
        <hr />
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="user/:id" element={<ContactDetail />} />
          <Route path="edit/:id" element={<EditContact />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
