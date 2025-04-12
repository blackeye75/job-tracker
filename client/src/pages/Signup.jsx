// src/pages/Signup.jsx
import { useState } from "react";
import { account, ID } from "../appwrite";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await account.create(ID.unique(), email, password, name);
      console.log("✅ Account created:", res);
      alert("Signup successful!");
    } catch (err) {
      console.error("❌ Signup error:", err);
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
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
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Sign Up</button>
    </form>
  );
};

export default Signup;
