import React, { useState } from "react";
import { Button, Typography, TextField, Stack } from "@mui/material";
import swal from "sweetalert";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function Home() {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);


  return (
    <div className="home ">
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">



    <div class="carousel-item active">
    <img src="https://th.bing.com/th/id/R.a085c915d7c538165e67fb6c916a6c2b?rik=Uz7A%2bG0d0f9r%2bA&riu=http%3a%2f%2fwww.moviescut.com%2fwp-content%2fuploads%2f2013%2f01%2fSpiders-3D.jpg&ehk=onpdbPwH2k8ThBEAvy88L6tCz%2beBNumBOSw%2bFtHoyyc%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div className="dip">
     
    
     <h1>DOWNLOAD VEDIOES TO YOUR LOCAL STORAGE.</h1>
     <h4>!!! BEST FOR EVERY YOUTUBE CHANNEL UPLODER!!!</h4>
     <h6>Best Of Best Movies To Your Door step</h6>
     </div>
      </div>
    </div>
  
    {/*  */}
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.a085c915d7c538165e67fb6c916a6c2b?rik=Uz7A%2bG0d0f9r%2bA&riu=http%3a%2f%2fwww.moviescut.com%2fwp-content%2fuploads%2f2013%2f01%2fSpiders-3D.jpg&ehk=onpdbPwH2k8ThBEAvy88L6tCz%2beBNumBOSw%2bFtHoyyc%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div className="dip">
     
    
     <h1>DOWNLOAD VEDIOES TO YOUR LOCAL STORAGE.</h1>
     <h4>!!! BEST FOR EVERY YOUTUBE CHANNEL UPLODER!!!</h4>
     <h6>Best Of Best Movies To Your Door step</h6>
     </div>
      </div>
    </div>
  </div>



{/*  */}
    {/* <div class="carousel-item">
    <div className="dip">
     
     <h1>UNLIMITED MOVIES</h1>
     <h1>DOWNLOAD VEDIOES TO YOUR LOCAL STORAGE.</h1>
     <h4>!!! BEST FOR EVERY YOUTUBE CHANNEL UPLODER!!!</h4>
     <h6>Best Of Best Movies To Your Door step</h6>
     </div>
      
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div> */}

 




  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
      <div class="row row-cols-1 row-cols-md g-4 text-center mt-5  shadow  bg-body-rounded reg  ">
        <div class="col-md-4">
          <div class="card" style={{ width: "18rem", marginLeft: "50px" }}>
            <div id="pad" class="card-body">
              <p
                className=""
                style={{
                  color: "black",
                  color: "gold",
                  fontWeight: "bolder",
                  paddingTop: "100%",
                }}
              >
                Rating:
                <span style={{ color: "gold" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 ">
          <div class="card" style={{ width: "18rem", marginLeft: "50px" }}>
            <div id="pa" class="card-body">
              <p
                className=""
                style={{
                  color: "black",
                  color: "gold",
                  fontWeight: "bolder",
                  paddingTop: "100%",
                }}
              >
                Rating:
                <span style={{ color: "gold" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 ">
          <div class="pic-ctn">
            <img
              src="https://th.bing.com/th/id/OIP.jToc9ah8D4qpildbXs-WLAAAAA?pid=ImgDet&w=351&h=500&rs=4"
              alt=""
              class="pic"
            />
            <img
              src="https://th.bing.com/th/id/OIP.jToc9ah8D4qpildbXs-WLAAAAA?pid=ImgDet&w=351&h=500&rs=4"
              alt=""
              class="pic"
            />
            <img
              src="https://th.bing.com/th/id/OIP.jToc9ah8D4qpildbXs-WLAAAAA?pid=ImgDet&w=351&h=500&rs=4"
              alt=""
              class="pic"
            />
            <img
              src="https://th.bing.com/th/id/OIP.jToc9ah8D4qpildbXs-WLAAAAA?pid=ImgDet&w=351&h=500&rs=4"
              alt=""
              class="pic"
            />
            <img
              src="https://th.bing.com/th/id/OIP.jToc9ah8D4qpildbXs-WLAAAAA?pid=ImgDet&w=351&h=500&rs=4"
              alt=""
              class="pic"
            />
          </div>
        </div>
     
      </div>

      {/* ........................... */}

      {/* ........ */}
     
    <hr/>  &copy;2023 &nbsp;NetMovie.com
    </div>
  );
}

export default Home;
