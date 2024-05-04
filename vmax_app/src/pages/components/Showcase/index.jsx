import React, { useState } from "react";
import testPreviewVideo from "../../../assets/test.mp4";

const Showcase = () => {
  const [showcaseVideo] = useState({
    channel: "Homework travelers",
    title:
      "Land of Legends and Lore: Discovering the Mystical Charms of Ireland",
    description:
      "Embark on an unforgettable journey through the Emerald Isle, Ireland, where breathtaking landscapes, rich history, and vibrant culture intertwine to create an enchanting tapestry of experiences.",
    url: testPreviewVideo,
  });

  return (
    <section className="relative flex items-center justify-start h-screen overflow-hidden">
      <div className="relative z-30 max-w-3xl pl-10 flex flex-col justify-center text-white ml-36">
        <a href="#c" className="font-bold hover:underline my-3">
          {showcaseVideo.channel}
        </a>

        <h3 className="text-5xl font-bold ">{showcaseVideo.title}</h3>

        <p className=" text-2xl font-light pt-10 text-wrap">
          {showcaseVideo.description}
        </p>

        <div className="flex pl-16 pt-10">
          <button
            className="text-slate-800 bg-slate-300 h-14 text-3xl rounded-lg border px-7 hover:bg-red-800 hover:text-white hover:border-red-800 transition ease-in-out delay-50"
            onClick={() => console.log("TODO: ABRIR VIDEO")}
          >
            Watch
          </button>
        </div>
      </div>

      <video
        className="absolute z-10 w-screen max-w-none cursor-pointer"
        autoPlay={true}
        muted
        loop
        onClick={() => console.log("TODO: ABRIR VIDEO")}
      >
        <source src={showcaseVideo.url} type="video/mp4" />
      </video>
    </section>
  );
};

export default Showcase;
