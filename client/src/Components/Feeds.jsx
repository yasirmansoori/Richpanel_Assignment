const Feeds = () => {
  return (
    <div className="p-2 border-bottom bg-body-tertiary">
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row ">
            <div className="d-flex pe-2">
              <input type="checkbox" />
            </div>
            <div className="d-flex flex-column">
              <span className="fw-medium">John Doe</span>
              <p className="fw-lighter m-0">Facebook DM</p>
            </div>
          </div>
          <div className="time">
            <small className="fw-semibold text-secondary">10m</small>
          </div>
        </div>
        <div className="d-flex flex-column mt-2">
          <p className="m-0">Awesome Product</p>
          <small className="text-secondary">
            Hey there! I probably did one of the bes..
          </small>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
