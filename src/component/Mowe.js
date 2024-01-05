import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Mowe({ data }) {
  let navigate = useNavigate();
  const routeChan = () => {
    navigate("/ved.js");
  };

  return (
    <div c>
      <div style={{ paddingTop: "1%" }}>
        <img
          src={data.photo}
          class="card-img-top image-fluid"
          alt="..."
          style={{ height: "40%" }}
        />
        <div
          class="card-body"
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            padding: "10%",
            justifyContent: "space-around",
          }}
          key={data.id}
        >
          <hr />
          <h5
            class="card-title"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              justifyContent: "space-around",
            }}
          >
            {data.tittle}
          </h5>
          <p class="card-text">{data.about}</p>
          <h5
            class="card-title"
            style={{
              fontWeight: "bolder",
              marginLeft: "5%",
            }}
          >
            <p
              className=""
              style={{
                color: "gold",
                fontWeight: "bolder",
                paddingTop: "11%",
                justifyContent: "space-around",
              }}
            >
              Rating:
              <span style={{ color: "brown" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </p>
            <button onClick={routeChan} className="btn btn-primary">
              Wacth
            </button>
          </h5>

          {/* <video width={'100%'} src={vedio1} controls type='vedio/ogg'></video> */}
        </div>
      </div>
    </div>
  );
}

export default Mowe;
