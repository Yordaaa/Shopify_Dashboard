import { apiSlice2 } from './apiSlice2';
import { RegistrationInputProps, RegistrationResponseProps, CartItem } from './types';

export const authApiSlice = apiSlice2.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<RegistrationResponseProps, RegistrationInputProps>({
      query: (data) => ({
        url: '/shopify/create-account',
        method: 'POST',
        body: data,
      }),
    }),

    sendToShopify: builder.mutation<RegistrationResponseProps, { name: string; products: CartItem[] }>({
      query: (data) => ({
        url: '/shopify/products',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useSendToShopifyMutation } = authApiSlice;
