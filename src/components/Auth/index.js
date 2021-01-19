import React, { useEffect, useCallback } from 'react';
import authService from '../../services/authService';

function Auth({children}) {

  const initAuth = useCallback(() => {
    if(authService.isAuthenticated()) {
      //Se o usuario estiver autenticado, recupera os dados dele
    }
  }, [])
  useEffect(() => {

  }, [])
  return children
}

export default Auth;