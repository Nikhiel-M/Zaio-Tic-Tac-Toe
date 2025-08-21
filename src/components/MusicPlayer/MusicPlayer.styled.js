import styled from "styled-components";
import { IoPlaySharp, IoShuffle, IoPause } from "react-icons/io5";

export const MusicPlayerWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
padding-bottom: 2rem;
position: fixed;
bottom: 0;
width: 100vw;
`

export const PlayIcon = styled(IoPlaySharp)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;
`

export const PauseIcon = styled(IoPause)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;
`

export const ShuffleIcon = styled(IoShuffle)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;
`