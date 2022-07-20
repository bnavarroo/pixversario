import { Dispatch, SetStateAction } from 'react';

export const getTypeWriterText = (
  value: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const typeWriter = (text: string, i = 0) => {
    if (i < value.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => typeWriter(text, i + 1), 100);
    }
  };
  typeWriter(value);
};
