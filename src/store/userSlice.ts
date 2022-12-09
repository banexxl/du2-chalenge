import { createSlice } from "@reduxjs/toolkit"


const initialState = {
          isLoggedIn: false,
};

const authSlice = createSlice({
          name: 'auth',
          initialState,
          reducers: {
                    logoutAction(state, action) {
                              state.isLoggedIn = false;
                    },
                    loginAction(state, action) {
                              state.isLoggedIn = true;
                    },
          },
});

export const { logoutAction, loginAction } = authSlice.actions;

export default authSlice.reducer