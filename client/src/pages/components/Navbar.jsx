// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../appwrite";
import { useAuth } from "../../AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await account.deleteSession("current");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="p-4 bg-blue-600 text-white flex items-center gap-4">
      <Link to="/">Home</Link>
      {user && <Link to="/add-job">Add Job</Link>}
      {!user && <Link to="/login">Login</Link>}
      {user && (
        <button onClick={handleLogout} className="ml-auto bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
