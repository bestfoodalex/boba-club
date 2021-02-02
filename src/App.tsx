import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Grommet, Image, Main } from 'grommet';
import BobaTea from './images/tea.svg';

const App = () => {
  const [drink, setDrink] = useState('');

  return (
    <Grommet full>
      <Main pad="large">
        <Header>
          <BobaImage src={BobaTea} />
          <h1>Boba Club</h1>
        </Header>
        <ButtonWrap pad="medium">
          <Button size="large" primary label="Generate your boba order!" onClick={() => setDrink('Black milk tea with boba')} />
        </ButtonWrap>
        {drink !== '' && <ButtonWrap pad="medium">
          <p>{drink}</p>
        </ButtonWrap>}
      </Main>
    </Grommet>
  );
};

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const BobaImage = styled(Image)`
  height: auto;
  width: 45px;
`;

const ButtonWrap = styled(Box)`
  text-align: center;
`;

export default App;
