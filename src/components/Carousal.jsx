import React from "react";

function Carousal() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 bg-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x500/?burger"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x500/?pastry"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(60%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x500/?barbeque"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
