import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  avatar: string;
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ avatar, name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar>
          <img src={avatar} alt="Avatar" />
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
