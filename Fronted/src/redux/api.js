import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const MovieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ["refreshComentario", "refreshPostComentario"],
  keepUnusedDataFor: 3,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        headers:{"Content-type": "application/json"},
        url:"/api/critMovies",
        method:"GET"
      }),
      providesTags:["refreshComentario"]
    }),
    postMovies: builder.mutation({
        query:(dataMovie) => ({
            headers:{"Content-type": "application/json"},
            url:"/api/critMovies",
            method:"POST",
            body:dataMovie
        }),
        invalidatesTags:["refreshComentario", "refreshPostComentario"]
    }),
    putMovies: builder.mutation({
        query: ({_id,post}) => ({
            url: `/api/critMovies/${_id}`,
            method: "PUT",
            body: post
        }),
        invalidatesTags:["refreshComentario", "refreshPostComentario"]
    }),
    deleteMovies: builder.mutation({
      query: ({_id}) => ({
        url: `/api/critMovies/${_id}`,
        method: "DELETE",
        headers:{"Content-type": "application/json"}
      }),
      invalidatesTags:["refreshComentario", "refreshPostComentario"]
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery, usePostMoviesMutation, usePutMoviesMutation, useDeleteMoviesMutation } = MovieApi