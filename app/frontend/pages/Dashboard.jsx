import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  // Example: check session on mount
  useEffect(() => {
    fetch("http://localhost:3000/sessions", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    try {
      // Here we just destroy session with id 1 (for demo)
      await fetch("http://localhost:3000/sessions/1", {
        method: "DELETE",
        credentials: "include",
      });
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome {user?.email || "Guest"} 🎉
          </h2>
          <p className="text-gray-600">
            This is your dummy dashboard. Replace this with charts, tasks, or
            any data from your Rails API.
          </p>
        </div>
      </div>
    </div>
  );
}
