import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import audioFile from './abc.mp3';  // Import from the src folder

const AudioPlayer = () => {
  return (
    <div>
      <ReactAudioPlayer
        src={audioFile}
        autoPlay={false}
        controls
      />
    </div>
  );
};

export default AudioPlayer;
