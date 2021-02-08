import React from 'react';

import Button from '../Button/index';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar>
          <img
            src="https://scontent.fppy3-1.fna.fbcdn.net/v/t1.0-9/73399754_726928251403687_2539963601706799311_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=SwdG25eQR9kAX9YF2cq&_nc_ht=scontent.fppy3-1.fna&oh=aa0f6ad363c060b66e64934b543a9aaf&oe=60433B57"
            alt="Avatar"
          />
        </Avatar>
        <ProfileData>
          <strong>Frederico Parreira</strong>
          <span>@parreira_fred</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
