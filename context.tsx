import {createContext} from "react";

export interface AuthState {
  user: string;
  signedIn: boolean;
}

export type AuthContextType = [AuthState, (state: AuthState) => void];

export const AuthContext = createContext<AuthContextType>([
  { user: '', signedIn: false },
  () => {},
]);