import React from 'react';

import {
  Container,
  Retweeted,
  TwitterIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TwitterIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar>
          <img
            src="https://pbs.twimg.com/profile_images/1118281699887132673/AWBCEgx0_400x400.jpg"
            alt="Avatar"
          />
        </Avatar>
        <Content>
          <Header>
            <strong>Danilo Gentili</strong>
            <span>@DaniloGentili</span>
            <Dot />
            <time>27 de jan</time>
          </Header>

          <Description>
            Quando a pessoa que optou publicar sua foto em certo contexto se
            ofendeu com brincadeira, ela entrou na justiça e foi ressarcida.
            Quem vai me ressarcir pela anos de mentira manchetada? Essa mentira
            além de influenciar o processo tb me prejudicou em trabalhos e com o
            público.
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 18
            </Status>
            <Status>
              <RetweetIcon /> 10
            </Status>
            <Status>
              <LikeIcon /> 500
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
