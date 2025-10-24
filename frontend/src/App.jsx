import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserDetail from "./pages/UserDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}
