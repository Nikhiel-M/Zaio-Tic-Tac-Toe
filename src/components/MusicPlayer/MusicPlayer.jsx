import React, { useEffect, useRef, useState} from "react";
import {
  MusicPlayerWrapper,
  PauseIcon,
  PlayIcon,
  ShuffleIcon,
  VolumeIcon,
  VolumeSection
} from "./MusicPlayer.styled";
import playList from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils/index";
// import { SfxContext } from "../../contexts/SfxContext";
import { Text } from "../../styles/General.styled";

const MusicPlayer = () => {
  // const { hoverSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const [volume, setVolume] = useState(1);
  const [volumeSlider, setVolumeSlider] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current.play();
      setPlayPromise(promise);
      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });
    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };

  const autoShuffleHandler = () => {
  setCurrentSong(randomizeIndex(playList));
  setIsPlaying(true);
};

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume = volume;
    }
  }, [volume, currentSong]);

  return (
    <MusicPlayerWrapper>
      <VolumeSection
        onMouseEnter={() => setVolumeSlider(true)}
        onMouseLeave={() => setVolumeSlider(false)}
      >

        <VolumeIcon />
        {volumeSlider && (
          <input
            className="volumeBar"
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={(e) => setVolume(e.target.valueAsNumber)}
          />
        )}
      </VolumeSection>

      {isPlaying ? (
        <PauseIcon
          onClick={() => setIsPlaying(false)}
          onMouseEnter={() => {
            // hoverSfx();
          }}
        />
      ) : (
        <PlayIcon
          onClick={() => setIsPlaying(true)}
          onMouseEnter={() => {
            // hoverSfx();
          }}
        />
      )}

      <ShuffleIcon
        onClick={shuffleHandler}
        onMouseEnter={() => {
          // hoverSfx();
        }}
      />

      <audio
        ref={playerRef}
        src={playList[currentSong].src}
        onEnded={autoShuffleHandler}
      ></audio>
      <Text>{playList[currentSong].name}</Text>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
