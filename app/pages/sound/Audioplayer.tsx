import React from "react";

const AudioPlayer = ({ src }: any) => {
  return (
    <div>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
