import React, { useEffect, useState } from "react";

const VideoCard = ({ video }) => {
  const [progress, setProgress] = useState(0);

  // useEffect(
  //   () => {
  //     const progress = Math.floor((video.watched / video.time) * 100);
  //     setProgress(progress);
  //   },
  //   [video.watched, video.time],
  //   () => {
  //     console.log(progress);
  //   }
  // );

  return (
    <div className="bg-red-800 aspect-video h-72">
      
    </div>
  );
};

export default VideoCard;
