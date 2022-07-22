import React, { useContext, useState } from "react";
import { postFetch } from "../../api/api";
import { LOGIN } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postFetch(LOGIN, input);
    if (res.data?.success) {
      setToken();
      return navigate("/");
    } else {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <main
      style={{
        width: "30%",
        margin: "auto",
        marginTop: "5%",
      }}
    >
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid black",
          padding: "5%",
          borderRadius: "10px",
          borderColor: "#cecece",
        }}
      >
        <img
          className="mb-4"
          src="img/usericon.png"
          alt="Logo"
          width="100"
          height="90"
          style={{ marginLeft: "35%" }}
        />
        <h1 className="h3 mb-3 fw-normal">Please Login in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setinput({ ...input, email: e.target.value })}
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setinput({ ...input, password: e.target.value })}
            minLength={5}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log in
        </button>
        <p className="mt-5 mb-3 text-muted" style={{ textAlign: "center" }}>
          © 2022–2022
        </p>
      </form>
    </main>
  );
};

export default Login;
