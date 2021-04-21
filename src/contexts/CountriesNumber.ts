import { createContext } from 'react';

const initialState: any[] = [
  10, (v:any) => v
];

export default createContext(initialState);