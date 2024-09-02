import React from "react";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carouselItems = [
  {
    src: "https://www.shutterstock.com/shutterstock/photos/788970643/display_1500/stock-vector-flat-illustration-of-society-members-with-a-large-group-of-men-and-women-788970643.jpg",
    alt: "vault storage",
  },
  {
    src: "https://c8.alamy.com/comp/H92MGP/society-social-media-social-networking-connection-concept-H92MGP.jpg",
    alt: "vault door",
  },
  {
    src: "https://c8.alamy.com/compfr/en847n/groupe-de-personnes-multi-concepts-et-idee-en847n.jpg",
    alt: "vault interior",
  },
  {
    src: "https://c8.alamy.com/compfr/jbmh23/plusieurs-personnes-a-l-interieur-des-engrenages-d-equipe-et-synergie-jbmh23.jpg",
    alt: "security system",
  },
];

export const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="society-vault-page">
      <div className="image-container">
        <ul className="text-wrapper">
          <h1>Welcome to Society Vault</h1>
        </ul>

        <ul className="text-wrapper-text">
          <h1>Secure Your Assets with Us</h1>
        </ul>
        <img
          className="vault-main-image"
          src="https://example.com/vault-main-image.jpg"
          alt="main vault"
        />
        <img
          className="logo-wrapper"
          src="https://www.shutterstock.com/shutterstock/photos/788970643/display_1500/stock-vector-flat-illustration-of-society-members-with-a-large-group-of-men-and-women-788970643.jpg"
          alt="society logo"
        />
      </div>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <Slider {...settings} className="carousel-slider">
            {carouselItems.map((item, index) => (
              <div key={index}>
                <img className="carousel-image" src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <ul className="text-wrapper-another">
        <h1>Protecting What Matters Most</h1>
      </ul>
    </div>
  );
};
