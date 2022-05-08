import { configureStore } from '@reduxjs/toolkit';
import { jobApi } from '../components/services/jobApi';

export default configureStore({
    reducer: {
        [jobApi.reducerPath]: jobApi.reducer,
    },
});

