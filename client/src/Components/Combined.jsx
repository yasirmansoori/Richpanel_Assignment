/* eslint-disable react/prop-types */
const Combined = ({ combinedMessages }) => {
  return (
    <div className="d-flex flex-column p-3 w-100">
      {combinedMessages.map((message, index) => (
        <div
          key={index}
          className={`d-flex flex-column ${
            message.role === "agent" ? "align-items-end" : "align-items-start"
          }`}
        >
          <div
            className={`rounded p-2 m-2 ${
              message.role === "agent"
                ? "bg-primary text-white"
                : "bg-secondary text-white"
            }`}
          >
            {message.message}
          </div>
          <div
            className={`text-muted ${
              message.role === "agent" ? "text-end" : "text-start"
            }`}
          >
            <div className="d-flex flex-column">
              <span>
                {message.role === "user" ? message.user.displayName : "You"}
              </span>
              <small className="fw-medium">{message.time}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Combined;
