import React from 'react';
import Tweet from '../Tweet';

import { Container, TabMenu, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <TabMenu>
        <Tab>
          <a href="/" tabIndex={0}>
            Tweets
          </a>
        </Tab>
        <Tab>
          <a href="/" tabIndex={0}>
            Tweets e respostas
          </a>
        </Tab>
        <Tab>
          <a href="/" tabIndex={0}>
            Mídia
          </a>
        </Tab>
        <Tab>
          <a href="/" tabIndex={0}>
            Curtidas
          </a>
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
