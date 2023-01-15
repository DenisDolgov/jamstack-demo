export interface User {
  uid: string;
  email: string | null;
  name: string | null;
  providerData: string;
  photoURL: string | null;
}
