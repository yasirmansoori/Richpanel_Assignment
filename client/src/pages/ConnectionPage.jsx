import styles from "../styles/connectionPage.module.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ConnectionPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [page, setPage] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const page = JSON.parse(localStorage.getItem("page"));
    if (user) {
      setUser(user);
    }
    if (page) {
      setPage(page);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    // localStorage.removeItem("page");
    toast.success("Bye! Have a great day!", {
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
      navigate("/login");
    }, 2000);
  };

  // Panel function
  const handlePanel = () => {
    navigate("/panel");
  };

  // Integration function
  const handleIntegration = () => {
    axios
      .get(`http://localhost:3001/api/pages/page/${user.id}`)
      .then((res) => {
        localStorage.setItem("page", JSON.stringify(res.data));
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Facebook ID not found!, try logging through facebook.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(err);
      });
  };

  // Delete Integration function
  const deleteIntegration = () => {
    localStorage.removeItem("page");
    window.location.reload();
  };

  // Connected component
  const Connected = () => {
    return (
      <div className={`${styles.group} d-grid gap-2 mx-auto border`}>
        <h3>
          Welcome, <strong>{user.displayName || user.name}</strong>
        </h3>
        <h5>Integrated Page:{page.pageName}</h5>
        <button
          className="btn btn-danger"
          type="button"
          onClick={deleteIntegration}
        >
          Delete Integration
        </button>
        <button className="btn btn-primary" type="button" onClick={handlePanel}>
          Reply to Messages
        </button>
        <button className="btn btn-info" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  };

  // Disconnected component
  const Disconnected = () => {
    return (
      <div className={`${styles.group} d-grid gap-2 mx-auto border`}>
        <p className="fw-medium">
          Oops, it seems you haven&apos;t integrated any page yet. Please
          integrate a page to continue.
        </p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleIntegration}
        >
          Connect Facebook Page
        </button>
        <button className="btn btn-info" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  };

  return (
    <>
      <div className={styles.page}>
        {page ? <Connected /> : <Disconnected />}
      </div>
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
    </>
  );
};

export default ConnectionPage;
