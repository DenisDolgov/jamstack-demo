import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from './firebase';
import { User } from 'models/user';

const db = getFirestore(app);

export function createUser(user: User) {
  return setDoc(doc(db, 'users', user.uid), user);
}
