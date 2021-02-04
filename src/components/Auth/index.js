import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../actions/accountActions';
import authService from '../../services/authService';
function Auth({children}) {
  const dispatch = useDispatch();

  const initAuth = useCallback(async () => {
    if(authService.isAuthenticated()) {
      //Se o usuario estiver autenticado, recupera os dados dele
      await dispatch(setUserData());
    }
  }, [dispatch])
  useEffect(() => {
    initAuth();
  }, [initAuth])
  return children
}

export default Auth;