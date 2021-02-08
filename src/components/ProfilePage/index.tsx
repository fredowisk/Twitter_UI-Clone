import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://scontent.fppy3-1.fna.fbcdn.net/v/t1.0-9/73399754_726928251403687_2539963601706799311_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=SwdG25eQR9kAX9YF2cq&_nc_ht=scontent.fppy3-1.fna&oh=aa0f6ad363c060b66e64934b543a9aaf&oe=60433B57"
            alt="Avatar"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Frederico Parreira</h1>
        <h2>@parreira_fred</h2>

        <p>
          Computer scientist at <a href="https://www.uniesi.edu.br/">UNIESI</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 03 de novembro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            <strong>94</strong> Seguindo
          </span>
          <span>
            <strong>672</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
