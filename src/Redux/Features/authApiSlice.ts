import { apiSlice2 } from "./apiSlice2";
import {
  RegistrationInputProps,
  RegistrationResponseProps,
  CartItem,
  WooCommerceRegistrationInputProps,
} from "./types";

export const authApiSlice = apiSlice2.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<
      RegistrationResponseProps,
      RegistrationInputProps
    >({
      query: (data) => ({
        url: "/shopify/create-account",
        method: "POST",
        body: data,
      }),
    }),

    woocommerceRegistration: builder.mutation<
      RegistrationResponseProps,
      WooCommerceRegistrationInputProps
    >({
      query: (data) => ({
        url: "/woocommerce/create-account",
        method: "POST",
        body: data,
      }),
    }),

    sendToShopify: builder.mutation<
      RegistrationResponseProps,
      { shopName: string; products: CartItem[] }
    >({
      query: (data) => ({
        url: "/shopify/products",
        method: "POST",
        body: data,
      }),
    }),

    sendToWoocommerce: builder.mutation<
      RegistrationResponseProps,
      { shopName: string; products: CartItem[] }
    >({
      query: (data) => ({
        url: "/woocommerce/products",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useWoocommerceRegistrationMutation,
  useSendToShopifyMutation,
  useSendToWoocommerceMutation,
} = authApiSlice;
