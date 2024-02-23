import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const socket = useMemo(() => io("http://localhost:3000"), []);
  const [combinedMessages, setCombinedMessages] = useState([]);
  const [agentData, setAgentData] = useState("");
  const [messagefrommessengerside, setMessagefrommessengerside] = useState("");

  useEffect(() => {
    socket.on("receive-message", (msg) => {
      setCombinedMessages((prev) => [...prev, msg]);
    });
    socket.on("user-connected-messenger", (msg) => {
      setAgentData(msg);
    });
  }, [socket]);

  // Function to send message to the server
  const handleSubmit = () => {
    socket.emit("message", {
      message: messagefrommessengerside,
      user: {
        displayName: "Rakesh JhunJhunwala",
        email: "RJ@richpanel.com",
      },
      time: new Date().toLocaleTimeString(),
      role: "user",
      profilePic:
        "https://www.forbesindia.com/media/images/2022/Aug/img_191977_rakeshjhunjhunwala_sm.jpg",
    });
    setCombinedMessages((prev) => [
      ...prev,
      {
        message: messagefrommessengerside,
        user: {
          displayName: "Rakesh JhunJhunwala",
          email: "RJ@richpanel.com",
        },
        time: new Date().toLocaleTimeString(),
        role: "user",
        profilePic:
          "https://www.forbesindia.com/media/images/2022/Aug/img_191977_rakeshjhunjhunwala_sm.jpg",
      },
    ]);
    setMessagefrommessengerside("");
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#1E4D91" }}
    >
      <div
        className="container p-4 rounded-3 shadow-lg h-100"
        style={{
          width: "1000px",
          backgroundColor: "white",
          maxHeight: "500px",
        }}
      >
        <h5 className="text-center">
          {`Messenging with ${agentData.firstname} ${agentData.lastname}`}
        </h5>
        <div
          className="border h-100 overflow-y-scroll mb-2 p-3"
          style={{ maxHeight: "380px" }}
        >
          <div className="d-flex flex-column w-100">
            {combinedMessages.map((message, index) => (
              <div
                key={index}
                className={`d-flex flex-column ${
                  message.role === "user"
                    ? "align-items-end"
                    : "align-items-start"
                }`}
              >
                <div
                  className={`rounded p-2 m-2 ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-secondary text-white"
                  }`}
                >
                  {message.message}
                </div>
                <div
                  className={`text-muted ${
                    message.role === "user" ? "text-end" : "text-start"
                  }`}
                >
                  <div className="d-flex flex-column">
                    <span>
                      {message.role === "agent"
                        ? message.user.displayName
                        : "You"}
                    </span>
                    <small className="fw-medium">{message.time}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={messagefrommessengerside}
            onChange={(e) => setMessagefrommessengerside(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
