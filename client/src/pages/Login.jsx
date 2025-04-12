// src/pages/Login.jsx
import { useState } from "react";
import { account } from "../appwrite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const session = await account.createEmailPasswordSession(email, password);
      console.log("✅ Login successful:", session);
      alert("Login successful!");
    } catch (err) {
      console.error("❌ Login error:", err);
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-600 text-white p-2 rounded">Log In</button>
    </form>
  );
};

export default Login;




// src/pages/Login.jsx
// import { account } from "../appwriteConfig";
// import { ID } from "appwrite";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await account.createEmailSession(email, password);
//       const user = await account.get();
//       setUser(user);
//       navigate("/"); // Redirect to Home
//     } catch (err) {
//       console.log("Login failed", err);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="p-4">
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="border p-2 block my-2"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="border p-2 block my-2"
//       />
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//         Login
//       </button>
//     </form>
//   );
// };

// export default Login;

