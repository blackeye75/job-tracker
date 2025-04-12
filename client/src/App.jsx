import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import AddJob from "./pages/AddJob";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-8 text-2xl">Welcome to Job Tracker</h1>} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
