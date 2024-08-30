import { paramsProps } from '../../Dashboard/types';
import { apiSlice } from './apiSlice';
import { ProductCardProps, productIdProps, productResTyp } from './types';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       
            getAllProducts: builder.query<ProductCardProps, paramsProps>({
            query: (params) => {
                return {
                    url: '/products/get-all-products',
                    params: {
                        keyword: params.keyword,
                        page: params.page
                    }
                };
            }
        }),
        getProduct: builder.query<productResTyp, productIdProps>({
            query: ({ id }) => {
                return {
                    url: `/products/get-product/${id}`
                };
            }
        })
    })
});

export const { useGetAllProductsQuery, useGetProductQuery } = productApiSlice;
