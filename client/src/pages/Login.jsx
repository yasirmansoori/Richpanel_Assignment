import styles from "../styles/register_login.module.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [email, setEmail] = useState("ym2745@srmist.edu.in");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (user) {
      navigate("/connect");
    }
  }, []);

  // Get user function
  const getUser = async () => {
    fetch("http://localhost:3001/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data.user));
          });
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Login with email function
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    if (localStorage.getItem("page")) {
      localStorage.removeItem("page");
    }
    axios
      .post("http://localhost:3001/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("Logged in successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/connect");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data.error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  // Login with facebook function
  const handleFacebook = () => {
    try {
      window.location.href = "http://localhost:3001/auth/facebook";
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleLoginWithEmail}>
        <h5 className="text-center">Login to your account</h5>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="johndoe@richpanel.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg w-100 mt-2"
          onClick={handleFacebook}
        >
          Login with Facebook
        </button>
        <p className="text-center mt-3">
          New to MyApp?{" "}
          <Link to="/" className="text-decoration-none fw-medium">
            Sign Up
          </Link>
        </p>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
