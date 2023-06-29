import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="foodcard card mt-3" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container">
            <select
              className="m-2 h-100 w-100 bg-success"
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
              className="m-2 h-100 w-100 bg-success"
              style={{ color: "white" }}
            >
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
