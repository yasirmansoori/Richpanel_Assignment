import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import Profile from "./Profile";
import Combined from "./Combined";
import Conversations from "./Conversations";

const Thread = () => {
  const socket = useMemo(() => io("http://localhost:3000"), []);
  const user = JSON.parse(localStorage.getItem("user"));
  const [messageFromAgent, setMessageFromAgent] = useState("");
  const [combinedMessages, setCombinedMessages] = useState([]);

  useEffect(() => {
    // Socket connection and event listeners
    socket.on("connect", () => {
      console.log("connected to server");
    });
    socket.on("receive-message", (data) => {
      setCombinedMessages((prev) => [...prev, data]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // Function to handle the submission of a message
  const handleSubmission = () => {
    socket.emit("send-message", {
      message: messageFromAgent,
      user: {
        displayName: user.displayName,
      },
      role: "agent",
      time: new Date().toLocaleTimeString(),
      profilePic: "https://via.placeholder.com/150",
    });
    setCombinedMessages((prev) => [
      ...prev,
      {
        message: messageFromAgent,
        user: {
          displayName: user.displayName,
        },
        role: "agent",
        time: new Date().toLocaleTimeString(),
        profilePic: "https://via.placeholder.com/150",
      },
    ]);
    setMessageFromAgent("");
  };

  return (
    <>
      <Conversations messages={combinedMessages} />
      <div className="d-flex flex-row flex-grow-1">
        <div className="d-flex flex-grow-1">
          <div className="d-flex flex-column justify-content-between flex-grow-1">
            <div className="p-2 border-bottom">
              <h5>{user.displayName || user.name}</h5>
            </div>

            {/* Combined messages from the user and the agent */}
            {combinedMessages.length === 0 ? (
              <div className="d-flex justify-content-center p-4 h-100 bg-body-secondary">
                No Conversations
              </div>
            ) : (
              <>
                <div className="bg-body-secondary h-100 overflow-y-scroll">
                  <Combined combinedMessages={combinedMessages} />
                </div>
                <div className="p-4 bg-body-secondary">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message here..."
                      aria-label="message here..."
                      aria-describedby="button-addon2"
                      value={messageFromAgent}
                      onChange={(e) => setMessageFromAgent(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={handleSubmission}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Profile component */}
        {<Profile combinedMessages={combinedMessages} />}
      </div>
    </>
  );
};

export default Thread;
