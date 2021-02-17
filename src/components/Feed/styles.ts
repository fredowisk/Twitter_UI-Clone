import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 10px;

  border-bottom: 1px solid var(--outline);
`;

export const Tab = styled.div`
  width: 100%;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  position: relative;

  color: var(--gray);

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    color: var(--gray);

    padding: 20px 20px 15px;
    white-space: nowrap;
    text-decoration: none;

    &:focus {
      color: var(--twitter);
      &::after {
        content: '';
        position: absolute;

        top: 98%;
        left: 10%;
        width: 80%;
        height: 2px;

        background: var(--twitter);
      }
    }

    &:hover {
      color: var(--twitter);
      background: var(--twitter-dark-hover);
    }
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
