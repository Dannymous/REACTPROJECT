import React, { useState } from "react";
import swal from "sweetalert";
import { Button, Typography, TextField, Stack } from "@mui/material";



function Contact() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [mat, setMat] = useState("");

  const add = () => {
    if (first === "" || last === "" || mat === "") {
      swal("Empty Field", "Please Fill The Require Space", "Error");
    } else {
      // local storage
      let user = {
        first: first,
        last: last,
        mat: mat,
      };
      localStorage.setItem("user", JSON.stringify(user));
      swal("succes", "Will Get Back To You Shortly", "Successfully Registerd");
    }
  };

  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://th.bing.com/th/id/OIP.XRW8YiO9H5wMNQMySqOO0AHaKU?pid=ImgDet&rs=1"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.premiumtimesng.com/wp-content/files/2022/10/images-13.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXXGZFB/image?locale=en-au&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div className="container-fluid">
            <Stack className="row justify-content-center p-5  col-md-12  shadow  bg-body-tertiary rounded reg bg-light">
              <h5 style={{ textAlign: "center" }}> Fill Spaces Up</h5>
              <TextField
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                id="filled-basic"
                label="First Name"
                variant="filled"
              />
              <br />
              <TextField
                className=""
                value={last}
                onChange={(e) => setLast(e.target.value)}
                id="filled-basic"
                label="Last Name"
                variant="filled"
              />
              <br />
              <TextField
                className=""
                value={mat}
                onChange={(e) => setMat(e.target.value)}
                id="standard-basic"
                label="Email@address"
                variant="standard"
              />
              <Button onClick={add} variant="contained" color="error">
                SUBMIT
              </Button>
            </Stack>
          </div>
        </div>
        <br />
        <div>
          <div>
            <div>
              <iframe
                className="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.562560438099!2d3.452798709429347!3d6.4501623935143035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f9f0b1c31b%3A0xc2c54070512886b8!2sLekki%20-%20Ikoyi%20Link%20Bridge%2C%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1692099715692!5m2!1sen!2sng"
                width="100"
                height="100"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
