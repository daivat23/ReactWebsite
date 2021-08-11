import React from "react";
import web from "./img/macbook.jpg";
import web1 from "./img/pic2.jpeg";
import web2 from "./img/pic3.jpg";
import web3 from "./img/pic4.jpg";
import web4 from "./img/pic5.jpg";
import web5 from "./img/pic6.jpeg";
const Service = () => {
  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Our service</h1>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
              <img src={web} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">App devlopment</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
              <img src={web1} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Website devlopment</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
              <img src={web2} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">AI devlopment</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
              <img src={web3} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Game devlopment</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
              <img src={web4} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">IOS devlopment</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
              <img src={web5} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Apple devlopment</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Service;