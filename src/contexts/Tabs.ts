import { createContext } from 'react';

const initialState: any[] = [
  0, (v:any) => v
];

export default createContext(initialState);