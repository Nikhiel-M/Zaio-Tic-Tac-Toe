import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Title } from "../../styles/General.styled";
import {
  DetailsContainer,
  NameInput,
  AvatarsDisplay,
  AvatarsContainer,
  StyledAvatar,
} from "./Details.styled.js";
import { PlayerWrapper } from "../../components/Player/Player.styled.js";
import Avatar, { genConfig } from "react-nice-avatar";
import { GameContext } from "../../contexts/GameContext.js";

const PlayerDetails = ({ player }) => {
  const { setPlayerAvatar, updatePlayerName, game } = useContext(GameContext);

  const nameHandler = (e) => {
    updatePlayerName(player, e.target.value);
  };

  const [avatarConfigs] = useState(() =>
    Array.from({ length: 6 }, () => genConfig())
  );

  const avatarHandler = (avatarConfig) => {
    setPlayerAvatar(player, avatarConfig);
  };

  return (
    <PlayerWrapper>
      <Title>{player === "player1" ? "Player 1" : "Player 2"}</Title>
      <NameInput
        type="text"
        placeholder="Name Here..."
        value={game[player].name}
        onChange={nameHandler}
      />
      <Title>Avatars</Title>
      <AvatarsDisplay>
        {avatarConfigs.map((config, i) => (
          <AvatarsContainer key={i} onClick={() => avatarHandler(config)}>
            <StyledAvatar>
              <Avatar className="avatars" {...config} />
            </StyledAvatar>
          </AvatarsContainer>
        ))}
      </AvatarsDisplay>
    </PlayerWrapper>
  );
};

const Details = () => {
  const navigate = useNavigate();
  return (
    <DetailsContainer>
      <PlayerDetails player="player1" />
      <Button className="Button" onClick={() => { navigate("/game-on"); }}> Play Game </Button>
      <PlayerDetails player="player2" />
    </DetailsContainer>
  );
};

export default Details;


