import React, { useEffect, useRef, useState, useContext } from "react";
import {MusicPlayerWrapper,PauseIcon, PlayIcon, ShuffleIcon} from "./MusicPlayer.styled";
import playList from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils/index";
import { SfxContext } from "../../contexts/SfxContext";
import { Text } from "../../styles/General.styled"

const MusicPlayer = () => {
  const { hoverSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const [volume] = useState(0.2)
  const playerRef = useRef(null);


  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current.play() ;
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

  useEffect(() => {
  if (playerRef.current) {
    playerRef.current.volume = volume;
  }
}, [volume, currentSong]);

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon onClick={() => setIsPlaying(false)} onMouseEnter={() => {hoverSfx()}} />
      ) : (
        <PlayIcon onClick={() => setIsPlaying(true)} onMouseEnter={() => {hoverSfx()}}/>
      )}

      <ShuffleIcon onClick={shuffleHandler} onMouseEnter={() => {hoverSfx()}}/>

      <audio
        ref={playerRef}
        src={playList[currentSong].src}
        onEnded={shuffleHandler}
      ></audio>
      <Text>{playList[currentSong].name}</Text>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
