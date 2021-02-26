import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, CheckBox, Footer, Grommet, Image, Main, Text } from 'grommet';
import { Instagram, Microphone } from 'grommet-icons';
import { levels } from '../models/ingredients';
import { generateTea, getRandom } from '../utils/utils';
import { respondTo } from '../utils/styles';
import Logo from '../images/logo.png';

const BobaClub = () => {
  const [drink, setDrink] = useState('');
  const [iceLevel, setIceLevel] = useState(50);
  const [sugarLevel, setSugarLevel] = useState(50);
  const [isDairyFree, setIsDairyFree] = useState(false);
  const [getCrazy, setGetCrazy] = useState(false);
  const [hideIce, setHideIce] = useState(false);

  const generateDrinkDetails = () => {
    setHideIce(false);
    setIceLevel(getRandom(levels));
    setSugarLevel(getRandom(levels));
    setDrink(generateTea(setHideIce, isDairyFree, getCrazy));
  };

  return (
    <Grommet full>
      <Main pad="large">
        <Header>
          <BobaImage alt="Boba Club Logo" src={Logo} />
          <h1>Boba Club</h1>
          <p>Where there's always love in the cup</p>
        </Header>
        <OptionsBox>
          <CheckBox
            name="toggle"
            label="Dairy Free?"
            onChange={() => setIsDairyFree(!isDairyFree)}
            toggle
          />
          <CheckBox
            name="toggle"
            label="Get crazy?"
            onChange={() => setGetCrazy(!getCrazy)}
            toggle
          />
        </OptionsBox>
        <ButtonWrap>
          <Button size="large" primary label="Generate random drink!" onClick={() => generateDrinkDetails()} />
        </ButtonWrap>
        {drink !== '' && <TextWrap>
          <p><strong>{drink.toUpperCase()}</strong></p>
          <p>{!hideIce && `${iceLevel}% ice, `}{sugarLevel}% sweet</p>
        </TextWrap>}
        <BobaFooter background="light-4" justify="center" pad="small">
          <Text margin="small" size="medium" tag="p" textAlign="center">
            Catch us on Clubhouse <Microphone /> every day or on Instagram <a href="https://www.instagram.com/ch.bobaclub" rel="noreferrer" target="_blank"><Instagram /> @ch.bobaclub</a>
          </Text>
          <Text margin="small" size="small" tag="p" textAlign="center">
            &copy; 2021 Boba Club &amp; <a href="http://alexjewell.com" rel="noreferrer" target="_blank">Alex Jewell</a>{' '}
            (<a href="http://instagram.com/bestfoodalex" rel="noreferrer" target="_blank">@bestfoodalex</a>).{' '}
            Contribute to the project on <a href="https://github.com/bestfoodalex/boba-club" rel="noreferrer" target="_blank">GitHub</a>.
          </Text>
        </BobaFooter>
      </Main>
    </Grommet>
  );
};

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;

  h1,
  p {
    display: none;
  }
`;

const BobaImage = styled(Image)`
  height: auto;
  width: 100%;

  ${(respondTo as any).sm`
    width: 400px;
  `}
`;

const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25px;

  label {
    padding-bottom: 20px;
  }

  ${(respondTo as any).sm`
    label {
      padding-bottom: 0;
      padding-right: 20px;
    }
  `}
`;

const OptionsBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding-top: 25px;

  label {
    padding-bottom: 20px;
  }

  ${(respondTo as any).sm`
    flex-direction: row;

    label {
      padding-bottom: 0;
      padding-right: 20px;
    }
  `}
`;

const TextWrap = styled.div`
  padding: 25px 0;
  text-align: center;
`;

const BobaFooter = styled(Footer)`
  flex-direction: column;
  margin-top: 100px;

  a {
    color: #222;
  }
`;

export default BobaClub;