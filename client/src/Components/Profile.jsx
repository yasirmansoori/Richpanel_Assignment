/* eslint-disable react/prop-types */
import dot from "../svg/dot.svg";
import profile from "../svg/profile.svg";
import phone from "../svg/phone.svg";

const Profile = ({ combinedMessages }) => {
  // Extracting the customer data 
  const customerData = combinedMessages[0];
  const firstName = customerData
    ? customerData.user.displayName.split(" ")[0]
    : "firstName";
  const lastName = customerData
    ? customerData.user.displayName.split(" ")[1]
    : "lastName";

  return (
    <div
      className="border-start bg-primary-subtle h-100 border-3"
      style={{ width: "18rem" }}
    >
      <div className="d-flex flex-column p-4 align-items-center bg-light border-bottom border-3">
        <img
          src={
            customerData
              ? customerData.profilePic
              : "https://via.placeholder.com/150"
          }
          className="rounded-circle object-fit-cover"
          height={100}
          width={100}
          alt="profile"
        />
        <h5 className="m-0">
          {customerData ? customerData.user.displayName : "Customer Name"}
        </h5>
        <span
          className={`text-primary ${
            customerData ? "text-success" : "text-danger"
          }`}
        >
          <img src={dot} alt="online" />
          {customerData ? "Online" : "Offline"}
        </span>
        <div className="d-flex w-100 justify-content-center gap-3">
          <button className="btn btn-sm btn-outline-secondary d-flex align-items-center">
            <img src={phone} alt="phone" className="me-2" />
            Call
          </button>
          <button className="btn btn-sm btn-outline-secondary d-flex align-items-center">
            <img src={profile} alt="profile" className="me-2" />
            Profile
          </button>
        </div>
      </div>
      <div className="d-flex flex-column p-3">
        <div className="p-2 rounded-3 bg-light">
          <h6 className="my-1">Customer details</h6>
          <div className="d-flex justify-content-between my-1">
            <span>Email</span>
            <span className="fw-medium">
              {customerData ? customerData.user.email : ""}
            </span>
          </div>
          <div className="d-flex justify-content-between my-1">
            <span>First Name</span>
            <span className="fw-medium">
              {customerData ? firstName : "Name"}
            </span>
          </div>
          <div className="d-flex justify-content-between my-1">
            <span>Last Name</span>
            <span className="fw-medium">
              {customerData ? lastName : "Name"}
            </span>
          </div>
          <h6 className="m-0 text-primary">View more details</h6>
        </div>
      </div>
    </div>
  );
};

export default Profile;
