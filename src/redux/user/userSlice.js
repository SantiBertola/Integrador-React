import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  hiddenMenu: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    setVerified: state => {
      if (state.currentUser) {
        state.currentUser.verified = true;
      }
    },
    toggleHiddenMenu: (state) => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    },
  },
});

export const { setCurrentUser, setVerified, toggleHiddenMenu } =
  userSlice.actions;

export default userSlice.reducer;
