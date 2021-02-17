import React from 'react';
import Tweet from '../Tweet';

import { Container, TabMenu, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <TabMenu>
        <Tab>
          <button>Tweets</button>
        </Tab>
        <Tab>
          <button>Tweets e respostas</button>
        </Tab>
        <Tab>
          <button>Mídia</button>
        </Tab>
        <Tab>
          <button>Curtidas</button>
        </Tab>
      </TabMenu>
      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
