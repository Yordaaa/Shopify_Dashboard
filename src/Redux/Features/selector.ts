import { RootState } from '../App/store';

export const cartSelector = (state: RootState) => state.cart;
export const userSelector = (state: RootState) => state.userInfo;
