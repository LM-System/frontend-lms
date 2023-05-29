import React from "react";
import styles from "./AboutUsPage.css";
import AbuEssa from "../../../../assets/images/AbuEssa.jpeg";
import Helmi from "../../../../assets/images/Helmi.png";
import Zaytowna from "../../../../assets/images/ghyath's photo.jpeg";
import Malek from "../../../../assets/images/malek.jpg";

function AboutUsPage() {
  // const texts = document.querySelectorAll(".hover-text");
  // texts.forEach((textElement) => {
  //   const text = textElement.innerText;
  //   if (text.length > 75) {
  //     textElement.classNameList.add("hover-text");
  //   } else {
  //     textElement.classNameList.remove("hover-text");
  //   }
  // });

  return (
    <>
      <div className="background"></div>
      <div className="background-texture"></div>
      <section className="carousel">
        {/* <h2 className="categories__title">Our Team</h2> */}
        <div className="carousel__container">
          <div className="carousel-item">
            <img className="carousel-item__img" src={AbuEssa} alt="people" />
            <div className="carousel-item__details">
              <div className="controls">
                <a
                  href="https://www.linkedin.com/in/mohammad-a-8903911a0/"
                  target="_blank"
                >
                  <i className="fab fa-brands fa-linkedin fill-icon-linkedin"></i>
                </a>
                <a href="https://github.com/MohammedAbuEssa" target="_blank">
                  <i className="fab fa-brands fa-github fill-icon-github"></i>
                </a>
              </div>
              <h5 className="carousel-item__details--title">
                Mohammad AbuEssa
              </h5>
              <h6 className="carousel-item__details--subtitle">
                Full-stack Devloper
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img className="carousel-item__img" src={Helmi} alt="people" />
            <div className="carousel-item__details">
              <div className="controls">
                <a
                  href="https://www.linkedin.com/in/helmiqatqat/"
                  target="_blank"
                >
                  <i className="fab fa-brands fa-linkedin fill-icon-linkedin"></i>
                </a>
                <a href="https://github.com/Helmi-Qatqat" target="_blank">
                  <i className="fab fa-brands fa-github fill-icon-github"></i>
                </a>
              </div>
              <h5 className="carousel-item__details--title">Helmi Qatqat</h5>
              <h6 className="carousel-item__details--subtitle ">
                Full-stack Devloper
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img className="carousel-item__img" src={Zaytowna} alt="people" />
            <div className="carousel-item__details">
              <div className="controls">
                <a
                  href="https://www.linkedin.com/in/mhd-keath-zaytowna-407519258"
                  target="_blank"
                >
                  <i className="fab fa-brands fa-linkedin fill-icon-linkedin"></i>
                </a>
                <a href="https://github.com/Mohammad-Keath" target="_blank">
                  <i className="fab fa-brands fa-github fill-icon-github"></i>
                </a>
              </div>
              <h5 className="carousel-item__details--title">
                Mohammad Zaytowna
              </h5>
              <h6 className="carousel-item__details--subtitle">
                Full-stack Devloper
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img className="carousel-item__img" src={Malek} alt="people" />
            <div className="carousel-item__details">
              <div className="controls">
                <a
                  href="https://www.linkedin.com/in/malek-al-sheekh-hasan-1a451a25a"
                  target="_blank"
                >
                  <i className="fab fa-brands fa-linkedin fill-icon-linkedin"></i>
                </a>
                <a href="https://github.com/MalekHasan" target="_blank">
                  <i className="fab fa-brands fa-github fill-icon-github"></i>
                </a>
              </div>
              <h5 className="carousel-item__details--title">Malek Hasan</h5>
              <h6 className="carousel-item__details--subtitle">
                Full-stack Devloper
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;
