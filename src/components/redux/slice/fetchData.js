import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('fetchData', async (url) => {

    try {
        const data = await fetch(url);
        return data.json();
    } catch (error) {
        console.error(error)
    }

});

const getDataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        data: [],
        error: false,
        errorMessage: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                if (action.payload.message === 'Page Not Found') {
                    state.error = true;
                    state.errorMessage = action.payload.message;
                }
            })
            .addCase(fetchData.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.data = [];
            });
    }
});

export default getDataSlice.reducer;
