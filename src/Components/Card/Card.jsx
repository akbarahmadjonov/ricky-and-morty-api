import "../../index.css";

export const Card = ({ image, status, name, location, gender }) => {
  return (
    <>
      <div className="card">
        <div className="card-header p-0">
          <img className="w-100" src={image} alt="rover" />
        </div>
        <div className="card-body">
          {(function () {
            if (status === "Alive") {
              return (
                <span className="tag tag-teal">
                  <i class="fa-solid fa-head-side-virus"></i> {status}
                </span>
              );
            } else if (status === "Dead") {
              return (
                <span className="tag tag-dead">
                  <i class="fa-solid fa-skull-crossbones"></i> {status}
                </span>
              );
            } else {
              return (
                <span className="tag tag-unknown">
                  <i class="fa-regular fa-circle-question"></i> {status}
                </span>
              );
            }
          })()}
          <h4 className="mt-2">{name}</h4>
          <p className="mt-1 fs-5">
            <i class="fa-solid fa-location-dot mt-3"></i> Last location:{" "}
            <span className="fs-6">{location}</span>
          </p>
          <p className="mt-1 fs-5">
            <i class="fa-solid fa-person-circle-question mt-3"></i> Gender:{" "}
            <span className="fs-6">{gender}</span>
          </p>
          {/* <div className="user">
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
              alt="user"
            />
            <div className="user-info">
              <h5>July Dec</h5>
              <small>2h ago</small>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
