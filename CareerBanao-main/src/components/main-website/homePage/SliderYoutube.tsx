import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface VideoCardProps {
  videoUrl: string;
  onVideoClick: () => void; // Add an onVideoClick prop to handle video clicks
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, onVideoClick }) => {
  return (
    <div className="p-5 pb-8" onClick={onVideoClick}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: "75.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            style={{ objectFit: 'contain' }}
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const SliderYoutube: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track if a video is playing

  const videos = [
    { videoUrl: "https://www.youtube.com/embed/Ako9mZC7uJE?si=gE6TORKwq7eFPFMh" },
    { videoUrl: "https://www.youtube.com/embed/cgJAwWfWW2g?si=PaqGlM9AN4APzSek" },
    { videoUrl: "https://www.youtube.com/embed/pvcrDGzVS28?si=ICIUWropT4GxdFW9" },
    { videoUrl: "https://www.youtube.com/embed/u9n4T7OcRjA?si=-VLrEUhJbfHtzUhy" },
    { videoUrl: "https://www.youtube.com/embed/4ayOAtUHwZM?si=01eL-Lpn8wmaYACW" }
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isPlaying, // Autoplay is paused when a video is clicked
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    customPaging: (_: number) => (
      <button className="hover:bg-orange-600 transition-colors duration-300"></button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleVideoClick = () => {
    setIsPlaying(true); // Pause autoplay when video is clicked
  };

  return (
    <section className="py-10 bg-[#EDEDE9] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-poppins text-center mb-6 text-gray-800">
          YouTube Videos
        </h2>
        <Slider ref={sliderRef} {...sliderSettings}>
          {videos.map((video, index) => (
            <VideoCard key={index} videoUrl={video.videoUrl} onVideoClick={handleVideoClick} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderYoutube;
