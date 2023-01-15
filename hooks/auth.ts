import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from 'lib/firebase';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import type { User } from 'models/user';
import { createUser } from 'lib/db';

type AuthContextType = ReturnType<typeof useProvideAuth>;

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  const handleUser = (rawUser: FirebaseUser | null) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      console.log('user', user);
      void createUser(user);
      setUser(user);

      return user;
    } else {
      setUser(rawUser);
      return rawUser;
    }
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        handleUser(response.user);

        return response.user;
      });
  };

  const signUpWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider())

      .then((response) => {
        handleUser(response.user);

        return response.user;
      });
  }

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        handleUser(response.user);

        return response.user;
      });
  };

  const signOut = () => {
    return auth.signOut()
      .then(() => handleUser(null));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleUser);

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

const formatUser = (user: FirebaseUser): User => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  providerData: user.providerData[0].providerId,
  photoURL: user.photoURL,
})
