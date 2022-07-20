import { useState, useEffect } from 'react';
import { getTypeWriterText } from './helpers';

export const useTypeWriter = (value: string) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    getTypeWriterText(value, setText);
  }, [value]);

  return text;
};
