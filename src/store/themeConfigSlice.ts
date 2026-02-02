import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface ThemeConfigState {
    loading: boolean;
}
const initialState: ThemeConfigState = {
    loading: false,
};

const themeConfigSlice = createSlice({
    name: 'themeConfig',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setLoading } = themeConfigSlice.actions;
export default themeConfigSlice.reducer;