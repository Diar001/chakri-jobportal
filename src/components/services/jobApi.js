import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const jobApiHeaders = {
    'x-rapidapi-host': 'job-search4.p.rapidapi.com',
    'x-rapidapi-key': '6215fee381msh06451564568f291p1217a6jsnefdd74529e6c'
}

const baseUrl = 'https://job-search4.p.rapidapi.com/linkedin';

const createRequest = (url) => ({ url, headers: jobApiHeaders });

export const jobApi = createApi({
    reducerPath: 'jobApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({ 
        getJobs: builder.query({
            query: () => createRequest('/search/jobs')
        })
    })
});

export const { 
    useGetJobsQuery,
} = jobApi;