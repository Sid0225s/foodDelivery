import React from "react";

function Card() {
  return (
    <div>
      <div className="foodcard card mt-3" style={{ width: "18rem" }}>
        <img
          src="https:/media.istockphoto.com/photos/chilli-paneer-tikka-or-paneer-kabab-picture-id629423010?k=20&m=629423010&s=612x612&w=0&h=X-OBIncHWjNFqxGfQuQHwrYHi2GcUw-jn7kqqZpHSw8="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container">
            <select
              className="m-2 h-100 bg-success rounded"
              style={{ color: "white" }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100  bg-success rounded"
              style={{ color: "white" }}
            >
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
