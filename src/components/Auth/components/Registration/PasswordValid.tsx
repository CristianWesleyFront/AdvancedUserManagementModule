import React from 'react';
import { PasswordForce, PasswordForceLine, PasswordForceText } from './styles';

interface IProps {
  password: string;
}

const PasswordValid: React.FC<IProps> = ({ password }) => {
  const checkLowerCase = (): boolean => /[a-z]/.test(password || '');
  const checkUppercase = (): boolean => /[A-Z]/.test(password || '');
  const checkDigit = (): boolean => /[0-9]/.test(password || '');
  const checkChar = (): boolean =>
    /[@~`!#$%\\^&*+=\-\\[\]\\';,/{}|\\":<>\\?]/g.test(password || '');

  let color = '#e4e6ef';
  let count = 0;

  if (checkLowerCase()) {
    color = '#f1416c';
    count++;
  }
  if (checkUppercase()) {
    color = '#f5a742';
    count++;
  }
  if (checkDigit()) {
    color = '#ffc700';
    count++;
  }
  if (checkChar() && password.length >= 8) {
    color = '#50cd89';
    count++;
  }

  return (
    <>
      <PasswordForce>
        <PasswordForceLine color={count >= 1 ? color : null} />
        <PasswordForceLine color={count >= 2 ? color : null} />
        <PasswordForceLine color={count >= 3 ? color : null} />
        <PasswordForceLine color={count >= 4 ? color : null} />
      </PasswordForce>
      <PasswordForceText>
        Use 8 or more characters with a mix of letters, numbers & symbols.
      </PasswordForceText>
    </>
  );
};

export default PasswordValid;
