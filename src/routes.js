import AddContactPage from "./Pages/AddContactPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";


const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/add", element: <AddContactPage /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
