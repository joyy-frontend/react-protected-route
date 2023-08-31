import { selector } from 'recoil';
import { accessTokenAtom } from './atom';

export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(accessTokenAtom)
})