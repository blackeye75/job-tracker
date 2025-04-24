// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 shadow-md">
      <Link to="/" className="text-xl font-bold">JobTracker</Link>
      <div>
        {user ? (
          <>
            <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
