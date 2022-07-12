import React, { useState } from 'react';
import Header from '@shared/components/header';
import Footer from '@shared/components/footer';
import Input from './components/input';
import Result from './components/result';
import { handleUpdateInputValue, handleClickButton } from './helpers';
import { TStateInputValue } from './types';
import * as Styled from './styles';

export const App: React.FC = () => {
  const [minValue, setMinValue] = useState<TStateInputValue>('');
  const [maxValue, setMaxValue] = useState<TStateInputValue>('');
  const [pixValue, setPixValue] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const isDisabledButton =
    typeof minValue !== 'number' || typeof maxValue !== 'number';

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Header />
        <Styled.Main>
          <Styled.InputWrapper>
            <Input
              name="min"
              label="mínimo"
              value={minValue}
              handleUpdateValue={handleUpdateInputValue(setMinValue)}
            />
            <Input
              name="max"
              label="máximo"
              value={maxValue}
              handleUpdateValue={handleUpdateInputValue(setMaxValue)}
            />
          </Styled.InputWrapper>
          <Styled.Button
            type="button"
            onClick={handleClickButton(
              minValue,
              maxValue,
              setPixValue,
              setError
            )}
            disabled={isDisabledButton}
          >
            Sortear Valor!
          </Styled.Button>
          <Result error={error} pixValue={pixValue} />
        </Styled.Main>
      </Styled.Wrapper>
      <Footer />
    </Styled.Container>
  );
};

export default App;
