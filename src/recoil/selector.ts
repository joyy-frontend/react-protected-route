import { selector } from 'recoil';
import { myNewAtom } from './atom';

export const myNewSelector = selector({
  key: 'myNewSelector',
  get: ({get}) => get(myNewAtom),
  set: ({set}, newValue) => set(myNewAtom, newValue),
});