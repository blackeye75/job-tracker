// src/pages/AddJob.jsx

import { useState } from "react";
import { databases, ID } from "../appwrite";

const AddJob = () => {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    jobLocation: "",
    jobType: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await databases.createDocument(
        "DATABASE_ID",         // ⚠️ replace with your actual Appwrite Database ID
        "COLLECTION_ID",       // ⚠️ replace with your actual Collection ID
        ID.unique(),
        {
          ...formData,
          createdBy: "user-id", // ✅ Abhi hardcode kar de — later we'll replace with actual user ID
        }
      );
      console.log("Job Created:", response);
      alert("Job successfully added!");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-md mx-auto">
      {["position", "company", "jobLocation", "jobType", "status"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Submit
      </button>
    </form>
  );
};

export default AddJob;
