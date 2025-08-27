import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Title } from "../../styles/General.styled";
import {
  PlayersWrapper,
  DetailsContainer,
  NameInput,
  AvatarsDisplay,
  AvatarsContainer,
  StyledAvatar,
  PlayerChoice,
} from "./Details.styled.js";
import Avatar, { genConfig } from "react-nice-avatar";
import { GameContext } from "../../contexts/GameContext.js";
import { SfxContext } from "../../contexts/SfxContext.js";

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
    <PlayersWrapper>
      <PlayerChoice>
        {" "}
        {game[player].avatarConfig && <Avatar className="avatars" {...game[player].avatarConfig} />}
      </PlayerChoice>
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
          <AvatarsContainer
            key={i}
            onClick={() => {
              avatarHandler(config);
            }}
          >
            <StyledAvatar>
              <Avatar className="avatars" {...config} />
            </StyledAvatar>
          </AvatarsContainer>
        ))}
      </AvatarsDisplay>
    </PlayersWrapper>
  );
};

const Details = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <DetailsContainer>
      <PlayerDetails player="player1" />
      <Button
        className="Button"
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
        onMouseEnter={hoverSfx}
      >
        {" "}
        Play Game{" "}
      </Button>
      <PlayerDetails player="player2" />
    </DetailsContainer>
  );
};

export default Details;
