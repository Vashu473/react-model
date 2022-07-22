import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/credentials/Login";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/Auth";
function App() {
  const { token } = useContext(AuthContext);
  return (
    <Routes>
      {localStorage.getItem("token") || token ? (
        <Route exact path="/*" element={<ProtectedRoutes />} />
      ) : (
        <Route exact path="/" element={<Login />} />
      )}
    </Routes>
  );
}
export default App;
