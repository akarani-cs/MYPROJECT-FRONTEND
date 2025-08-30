
import React from "react";
import zombiesBg from "../assets/zombies-movie-theater.jpg";

const ExploreSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken background for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 container mx-auto px-6 flex justify-end items-center min-h-screen">


        {/* Left Image */}
        {/*////removed it*}

        {/* Right Text */}
        <div className="text-right">
          <h2 className="text-4xl font-bold mb-4">
            Explore the Magic
          </h2>
          <p className="text-lg font-semibold leading-relaxed max-w-md ml-auto">
            Discover the enchanting world of cinema at Creek. Immerse yourself
            in captivating movie reviews, exciting trailers, and engaging
            discussions. Let your movie journey begin today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
