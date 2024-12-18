import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
interface CardProps {
  logoUrl: string; // Assuming the logo is an image
}

const Card: React.FC<CardProps> = ({ logoUrl }) => {
  return (
    <div className="p-5 pb-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full h-48 flex justify-center items-center">
          <img
            className="max-w-full max-h-full object-contain"
            src={logoUrl}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};


const UnivercitiesLogoSlider: React.FC = () => {
  const cards = [
    { logoUrl: "./logo/Quantum_logo.png" },
    { logoUrl: "./logo/1631180032phpvUgTqj.jpeg" },
    { logoUrl: "./logo/images.png" },
    { logoUrl: "./logo/products.png" },
    { logoUrl: "./logo/Slide80.jpeg" },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    // dotsClass:"",
    // customPaging: (_: number) => (
    //       <button className="hover:bg-orange-600 transition-colors duration-3000 " style={{borderRadius:"100%"}}></button>
    //     ),
        appendDots: (dots: React.ReactNode) => (
          <div className="mt-4">
          
            <ul className="flex justify-center">{dots}</ul>
          </div>
        ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 bg-[#EDEDE9] relative">
      <h2 className="text-center font-poppins text-3xl">
        Top Ranked Institutes & Universities
      </h2>
      <div className="container mx-auto px-4 relative">
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index} logoUrl={card.logoUrl} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UnivercitiesLogoSlider;
