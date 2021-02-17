import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import Button from '../Button/index';

import {
  Container,
  TopSide,
  TopButton,
  Logo,
  MenuButton,
  MoonIcon,
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

interface Props {
  toggleTheme(): void;
}

const MenuBar: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <TopSide>
        <TopButton>
          <Logo />
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            checkedHandleIcon={<MoonIcon style={{ fill: '#FFF' }} />}
            uncheckedHandleIcon={<MoonIcon style={{ fill: '#ffdf5d' }} />}
            handleDiameter={30}
            height={23}
            width={50}
            offColor={'#2C8ED6'}
            onColor={'#edeeed'}
            offHandleColor={'#edeeed'}
            onHandleColor={'#2C8ED6'}
          />
        </TopButton>
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
