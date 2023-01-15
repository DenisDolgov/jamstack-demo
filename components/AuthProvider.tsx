import { AuthContext, useProvideAuth } from '../hooks/auth';
import { PropsWithChildren } from 'react';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth = useProvideAuth();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
