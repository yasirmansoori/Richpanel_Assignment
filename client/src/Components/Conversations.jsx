/* eslint-disable react/prop-types */
import messageQueue from "../svg/messageQueue.svg";
import reload from "../svg/reload.svg";
import Feeds from "./Feeds";

const Conversations = ({ combinedMessages }) => {
  return (
    <div className="border-end" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-between p-2 align-items-baseline border-bottom">
        <div>
          <img src={messageQueue} />
        </div>
        <h5>Conversations</h5>
        <div>
          <button className="btn">
            <img
              src={reload}
              onClick={() => {
                window.location.reload();
              }}
            />
          </button>
        </div>
      </div>
      {/* Conversation List */}
      {combinedMessages ? (
        <Feeds />
      ) : (
        <div className="p-4 text-center">No Conversations</div>
      )}
    </div>
  );
};

export default Conversations;
