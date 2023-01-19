import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { app } from './firebase';
import { User } from 'models/user';
import { SiteModel } from '../models/site';

const db = getFirestore(app);

export function createUser(user: User) {
  return setDoc(doc(db, 'users', user.uid), user);
}

export function createSite(site: SiteModel) {
  return addDoc(collection(db, 'sites'), site);
}
