/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';
import { TStateInputValue, IErrorData } from './types';

const getError = (min: number, max: number): IErrorData => {
  if (min < 0) {
    return { error: true, msg: 'O valor mínimo permitido é zero.' };
  }

  if (min > max) {
    return {
      error: true,
      msg: 'O valor máximo não pode ser menor que o valor mínimo.',
    };
  }

  return { error: false, msg: '' };
};

export const handleUpdateInputValue =
  (setState: Dispatch<SetStateAction<TStateInputValue>>) => (value: TStateInputValue) => setState(value);

export const handleClickButton =
  (
    minValue: TStateInputValue,
    maxValue: TStateInputValue,
    setPixValue: Dispatch<SetStateAction<number>>,
    setError: Dispatch<SetStateAction<string>>
  ) =>
    () => {
      const [min, max] = [minValue || 0, maxValue || 0];
      const { error: errorValue, msg: errorMsg } = getError(min, max);

      if (errorValue) {
        setPixValue(0);
        setError(errorMsg);
      } else {
        const randomValue = Math.random() * (max - min) + min;
        setError('');
        setPixValue(parseFloat(randomValue.toFixed(2)));
      }
    };

export const fmtValueToLocaleString = (value: number) => value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
