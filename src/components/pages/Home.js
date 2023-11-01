import React from "react";
import "../../styles/Home.css";

export default function Home() {
    setTimeout(function () {
      window.scrollTo(0, 500);
    }, 100);
  return (
    <div className="home-main">
      <h1 className="text-center p-3 home-head">Honestus</h1>
      <div className="d-flex home-container">
        <div className="headshot flex-fill d-flex justify-content-center mt-3 animate__animated animate__backInLeft">
          Reno Pic Here
        </div>
        <div className="d-flex flex-column justify-content-around ">
          <div className="home-info d-flex flex-wrap justify-content-center mt-3 animate__animated animate__backInDown">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="d-flex justify-content-between techs mt-5 animate__animated animate__backInRight">
            <div className="mx-2">
              <h3> We Do: </h3>
              <ul className="">
                <li>Painting</li>
                <li>Tiles</li>
                <li>Drywall</li>
                <li>Flooring</li>
                <li>Roofing</li>
                <li>Ceiling</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
