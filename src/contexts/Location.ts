import { createContext } from 'react';

const initialState: any[] = [
  {}, (v:any) => v
];

export default createContext(initialState);