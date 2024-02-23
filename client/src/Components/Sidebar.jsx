import "react-toastify/dist/ReactToastify.css";
import logo from "../images/richpanel_logo.png";
import messages from "../svg/messages.svg";
import groups from "../svg/groups.svg";
import analytics from "../svg/analytics.svg";
import logout from "../svg/logout.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
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

  return (
    <div
      className="d-flex flex-column"
      style={{ width: "4.5rem", backgroundColor: "#004e96" }}
    >
      <div className="flex-column mb-auto text-center">
        <button
          type="button"
          className="btn border-0 rounded-0 border-bottom w-100"
        >
          <img src={logo} className="img-fluid p-2" alt="Rich Panel" />
        </button>
        <button className="btn border-0 bg-white rounded-0 border-bottom w-100">
          <img src={messages} alt="" className="p-2" />
        </button>
        <button className="btn border-0  rounded-0 border-bottom w-100">
          <img src={groups} alt="" className="p-2" />
        </button>
        <button className="btn border-0  rounded-0 border-bottom w-100">
          <img src={analytics} alt="" className="p-2" />
        </button>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#logout"
      >
        <img src={logout} alt="" className="p-4" />
        {/* Logout Modal */}
      </div>
      <div
        className="modal fade"
        id="logout"
        tabIndex={-1}
        aria-labelledby="logoutLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="logoutLabel">
                Are you sure you want to logout?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogout}
                data-bs-dismiss="modal"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
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
      <div className="d-flex align-items-center justify-content-center p-3">
        <img
          src="https://via.placeholder.com/150"
          alt="mdo"
          className="rounded-circle img-fluid object-fit-cover"
        />
      </div>
    </div>
  );
};

export default Sidebar;
