import React from "react";
import "../../styles/Home.css";
import home1 from "../../assets/images/homepic1.jpeg";
import home2 from "../../assets/images/PicsForPotlights/0potlightOut.JPG"
import cityMap from "../../assets/images/CityMap.png"

export default function Home() {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);
  return (
    <div className="home-main animate__animated animate__fadeIn">
      <h1 className="text-center p-3 home-head">HONESTUS</h1>
      <div className="d-flex home-container">
        <div className="headshot d-flex justify-content-center mt-3">
          <div className="customhome-box p-2">
            <img
              src={home1}
              alt="Picture1"
              className="img-fluid custom-homepic"
            ></img>
          </div>
          <div className="home-pic p-2">
            <img src={home2} alt="Picture2" className="img-fluid"></img>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-around ">
          <div className="home-info d-flex flex-wrap justify-content-center mt-3">
            <div>
              <h3 className="subhead">Who We Are</h3>
              <p>
                Welcome to Honestus, your trusted partner in home
                transformations. Proudly serving the Greater Toronto Area (GTA),
                Mississauga, Brampton, Kitchener-Waterloo, and the Durham
                region, we bring a blend of expertise and integrity to every
                project.
              </p>
              <p>
                At Honestus, we specialize in a comprehensive range of services,
                including meticulous painting, exquisite flooring solutions,
                bespoke bathroom and kitchen renovations, and reliable general
                contracting. Our dedicated team of professionals is committed to
                turning your vision into reality, ensuring that your space
                reflects your unique style and meets the highest standards of
                quality. What sets us apart? Our unwavering commitment to
                honesty and excellence. We not only promise top-notch
                craftsmanship but also guarantee transparency throughout the
                entire process. At Honestus, we believe in open communication,
                ensuring that you are informed and involved every step of the
                way.
              </p>
              <p>
                In addition to our commitment to quality, we understand the
                importance of affordability. That's why we go the extra mile by
                not just matching any price but beating it with superior
                quality. Your satisfaction is our priority, and we strive to
                deliver exceptional results that exceed your expectations.
              </p>
              <p>
                Choose Honestus for renovations that go beyond the surface –
                where honesty, quality, and affordability converge to create
                spaces you'll love.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between p-4 map-section">
        <div className="d-flex justify-content-between techs mt-5">
          <div className="mx-2">
            <h3 className="subhead">
              We Offer Our Services All Over the GTA!{" "}
            </h3>
            <ul className="">
              <li>Painting</li>
              <li>Pot Lights</li>
              <li>Flooring</li>
              <li>Kitchens</li>
              <li>Bathrooms</li>
              <li>Epoxy Flooring</li>
              <li>Wainscoting</li>
            </ul>
          </div>
        </div>
        <div className="gta-map">
          <img src={cityMap} alt="City Map" className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
}
