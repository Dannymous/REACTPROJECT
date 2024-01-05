import React, { useEffect, useState } from "react";
import Mowe from "./Mowe";
import data from "./data";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Upold from "./Upold.js";


function Movies() {
  let navigate = useNavigate();
  const routeChan = () => {
    navigate("/ved.js");
  };

  const [Movies, setMovies] = useState(data);
  console.log(Movies);

  const moviesData = Movies.map((data) => {
    return (
      <section className="col-md-4 text-center shadow  bg-body-rounded reg  ">
        <Mowe key={data.id} data={data} />
      </section>
    );
  });

  return (
    <div>
      <div className="row">{moviesData}</div>
      <Upold/>
  
    </div>
  );
}

export default Movies;
