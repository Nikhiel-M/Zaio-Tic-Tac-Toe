import styled from "styled-components";
import { IoPlaySharp, IoShuffle, IoPause } from "react-icons/io5";
import { FaVolumeUp } from "react-icons/fa";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding-bottom: 2rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

export const PlayIcon = styled(IoPlaySharp)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  cursor: pointer;
`;

export const PauseIcon = styled(IoPause)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  cursor: pointer;
`;

export const ShuffleIcon = styled(IoShuffle)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  cursor: pointer;
`;
export const VolumeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .volumeBar {
    width: 90%;
    margin-left: 0.5rem;
    height: 15px;
    border-radius: 5px;
    background: transparent;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
      background: ${(props) => props.theme.colors.secondary};
      height: 8px;
      border-radius: 5px;
    }
    
    &::-webkit-slider-thumb {
      background: ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      cursor: pointer;
      border: none;
      margin-top: -4px; /* Centers thumb on track */
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.13);
    }
  }
`;

export const VolumeIcon = styled(FaVolumeUp)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  cursor: pointer;
`;
