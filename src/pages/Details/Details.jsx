// import { useContext, useState } from "react";
// import { Title } from "../../styles/General.styled";
// import {
//   DetailsContainer,
//   NameInput,
//   AvatarsDisplay,
//   AvatarsContainer,
// } from "./Details.styled.js";
// import { PlayerWrapper } from "../../components/Player/Player.styled.js";
// import Avatar, { genConfig } from "react-nice-avatar";
// import { GameContext } from "../../contexts/GameContext.js";

// const Details = () => {
//   const [selectedAvatar, setSelectedAvatar] = useState(null);
//   const { setPlayerAvatar } = useContext(GameContext);

//   const avatarHandler = (player, avatarConfig) => {
//     setSelectedAvatar(avatarConfig);
//     setPlayerAvatar(player, avatarConfig);
//   };

//   return (
//     <DetailsContainer>
//       <PlayerWrapper>
//         <Title>Player 1</Title>
//         <NameInput type="text" placeholder="Name Here..." />
//         <Title>Avatars</Title>
//         <AvatarsDisplay>
//           {Array.from({ length: 6 }).map((_, i) => {
//             const config = genConfig();
//             return (
//               <AvatarsContainer
//                 key={i}
//                 onClick={() => avatarHandler("player1", config)}
//               >
//                 <Avatar {...config} />
//               </AvatarsContainer>
//             );
//           })}
//         </AvatarsDisplay>
//       </PlayerWrapper>

//       <PlayerWrapper>
//         <Title>Player 2</Title>
//         <NameInput type="text" placeholder="Name Here..." />
//         <Title>Avatars</Title>
//         <AvatarsDisplay>
//           {Array.from({ length: 6 }).map((_, i) => {
//             const config = genConfig();
//             return (
//               <AvatarsContainer
//                 key={i}
//                 onClick={() => avatarHandler("player2", config)}
//               >
//                 <Avatar {...config} />
//               </AvatarsContainer>
//             );
//           })}
//         </AvatarsDisplay>
//       </PlayerWrapper>
//     </DetailsContainer>
//   );
// };

// export default Details;

import { useContext } from "react";
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
  const { setPlayerAvatar } = useContext(GameContext);

  const avatarHandler = (avatarConfig) => {
    setPlayerAvatar(player, avatarConfig);
  };

  return (
    <PlayerWrapper>
      <Title>{player}</Title>
      <NameInput type="text" placeholder="Name Here..." />
      <Title>Avatars</Title>
      <AvatarsDisplay>
        {Array.from({ length: 6 }).map((_, i) => {
          const config = genConfig();
          return (
            <AvatarsContainer key={i} onClick={() => avatarHandler(config)}>
              <StyledAvatar>
                <Avatar className="avatars" {...config} />
              </StyledAvatar>
            </AvatarsContainer>
          );
        })}
      </AvatarsDisplay>
    </PlayerWrapper>
  );
};

const Details = () => {
  return (
    <DetailsContainer>
      <PlayerDetails player="Player 1" />
      <PlayerDetails player="Player 2" />
    </DetailsContainer>
  );
};

export default Details;
