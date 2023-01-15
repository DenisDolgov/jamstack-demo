import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import type { User } from 'firebase/auth';

type AuthContextType = ReturnType<typeof useProvideAuth>;

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signUpWithGoogle = () => {
    console.log('AUTH', auth);
    return signInWithPopup(auth, new GoogleAuthProvider())

      .then((response) => {
        setUser(response.user);

        return response.user;
      });
  }

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signOut = () => {
    return auth.signOut()
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signIn,
    signUp,
    signOut,
    signUpWithGoogle,
  };
}
