import * as S from './styles';
import { useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';

const Welcome = () => {
  const [username, setUsername] = useState<string>('');
  const { saveUser } = useUserContext();

  const inputChangeHandler = (e: any) => {
    setUsername(e.target.value);
  };

  const setUserHandler = (e: any) => {
    saveUser(username);
  };

  return (
    <S.Container>
      <S.Label>Choose a username</S.Label>
      <S.Input>
        <input type="text" required id="username" onChange={inputChangeHandler} placeholder="type your username..." autoComplete="off" />
      </S.Input>
      <S.ButtonC>
        <button onClick={setUserHandler}>Submit</button>
      </S.ButtonC>
    </S.Container>
  );
};

export default Welcome;
