"use client";
import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

const SoundPlayer = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const sound = new Howl({
      src: ["../../../1.mp3"],
    });

    if (play) {
      sound.play();
    } else {
      sound.stop();
    }

    return () => {
      sound.unload(); // Clean up the Howl instance when component unmounts
    };
  }, [play]);

  const playSound = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h1>Sound Player</h1>
      <button onClick={playSound}>{play ? "Stop Sound" : "Play Sound"}</button>
    </div>
  );
};

export default SoundPlayer;
