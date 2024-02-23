import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ConnectionPage from "./pages/ConnectionPage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      navigate("/connect");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/connect" /> : <Login />}
      />
      <Route
        path="/connect"
        element={user ? <ConnectionPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/panel"
        element={user ? <Dashboard /> : <Navigate to="/connect" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
