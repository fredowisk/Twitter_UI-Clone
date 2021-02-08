import React from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                avatar="https://scontent.fppy3-1.fna.fbcdn.net/v/t1.0-9/131888237_3579919392121686_3975894795033614397_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=MxOpA-nYCDkAX_x5Txa&_nc_ht=scontent.fppy3-1.fna&oh=0aed053cb4de393af6a5d3ea80cfb802&oe=6047B405"
                name="Gabriele Pages"
                nickname="@gabrielepages"
              />,
              <FollowSuggestion
                avatar="https://scontent.fppy3-1.fna.fbcdn.net/v/t1.0-9/16708337_1839623976279571_24195204584240476_n.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=BntHWT8JfNcAX8RfLAd&_nc_ht=scontent.fppy3-1.fna&oh=f8237f3df5668c83dadb4f29bfc88f3f&oe=6045677A"
                name="Carlos Eduardo"
                nickname="@ripcarlao"
              />,
              <FollowSuggestion
                avatar="https://scontent.fppy3-1.fna.fbcdn.net/v/t1.0-9/48355866_1049867365200121_3347322310196461568_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=Vn5fS5O5W0AAX_ZZL7x&_nc_ht=scontent.fppy3-1.fna&oh=bc6f9ca2ba46a888b17bd7a8693cc5d1&oe=60457781"
                name="Alisson Vilela"
                nickname="@ualizon"
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
