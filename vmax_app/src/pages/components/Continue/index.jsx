import React from "react";
import VideoCard from "../VideoCard";

import tokyoThumb from "../../../assets/thumb-tokyo.jpg";
import developerThumb from "../../../assets/thumb-developer.jpg";

const Continue = () => {
  const mockVideos = [
    {
      id: 34712,
      thumbnail: tokyoThumb,
      time: 64800,
      watched: 13200,
      title: "Tokyo night city",
    },
    {
      id: 14125,
      thumbnail: developerThumb,
      time: 54000,
      watched: 25200,
      title: "One day of sofyware developer",
    },
    {
      id: 3123,
      thumbnail: tokyoThumb,
      time: 64800,
      watched: 13200,
      title: "Tokyo night city",
    },
    {
      id: 1292,
      thumbnail: developerThumb,
      time: 54000,
      watched: 25200,
      title: "One day of sofyware developer",
    },
    {
      id: 341232,
      thumbnail: tokyoThumb,
      time: 64800,
      watched: 13200,
      title: "Tokyo night city",
    },
    {
      id: 91292,
      thumbnail: developerThumb,
      time: 54000,
      watched: 25200,
      title: "One day of sofyware developer",
    },
  ];

  return (
    <div className="w-screen h-96 px-8 flex items-center bg-gray-900">
      <VideoCard video={mockVideos[0]}/>
    </div>
  );
};

export default Continue;
