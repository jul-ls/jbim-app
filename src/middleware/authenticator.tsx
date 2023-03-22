import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppContext } from './context-provider';
import { FC, useEffect } from 'react';

let authInitialized = false;

export const Authenticator: FC = () => {
  const auth = getAuth();
  const dispatch = useAppContext()[1];

  //quando o usuario entra, roda o dispatch
  const listenToAuthChanges = () => {
    onAuthStateChanged(auth, (foundUser) => {
      const user = foundUser ? { ...foundUser } : null;
      dispatch({ type: 'UPDATE_USER', payload: user });
    });
    //array vazia pra rodar só 1a vez
  };
  useEffect(() => {
    if (!authInitialized) {
      listenToAuthChanges();
      authInitialized = true;
    }
  }, []);
  return <></>;
};
