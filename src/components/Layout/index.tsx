import React from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

interface Props {
  toggleTheme(): void;
}

const Layout: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Wrapper>
        <MenuBar toggleTheme={toggleTheme} />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
