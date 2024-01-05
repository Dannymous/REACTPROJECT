import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./component/Home";
import Navbar from "./inc/Navbar";
import Movies from "./component/Movies";
import Contact from "./component/Contact";
import Adver from "./component/Adver";
import Page from "./component/Page";
import "./component/Style.css";
import data from "./component/data";
import Mo from "./component/Mo";
import ved from "./component/ved";






function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="contact" element={<Contact />} />
          <Route path="adver" element={<Adver />} />
          <Route path="*" element={<Page />} />
          <Route path="mo" element={<Mo />} />
          <Route path="ved" element={<ved/>} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
