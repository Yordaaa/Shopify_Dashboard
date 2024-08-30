import { apiSlice2 } from './apiSlice2'; // Ensure this is correctly set up with base URL
import { RegistrationInputProps, RegistrationResponseProps } from './types';

// Define the authApiSlice
export const authApiSlice = apiSlice2.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<RegistrationResponseProps, RegistrationInputProps>({
      query: (data) => ({
        url: '/shopify/create-account',
        method: 'POST',
        body: data,
      }),
      // If using credentials, ensure this is correctly set up:
      // options: {
      //   credentials: 'include'
      // }
    }),
  }),
});

// Export the hook for usage in components
export const { useRegistrationMutation } = authApiSlice;
