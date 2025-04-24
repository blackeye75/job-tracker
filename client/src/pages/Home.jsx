import { useEffect, useState } from "react";
import { account } from "../appwrite/config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    const getUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.log("No active session, redirecting to login...");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) {
    return <p className="text-center p-4">Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-600">Welcome, {user?.name || "User"} 🎉</h1>
      <p className="text-gray-600 mt-2">Email: {user?.email}</p>
    </div>
  );
};

export default Home;
