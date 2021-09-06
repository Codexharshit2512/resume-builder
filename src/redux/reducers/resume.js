import { createSlice } from "@reduxjs/toolkit";
// import { contactState } from "../states/initStates";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: { skin: null, logo: null, resumeId: null },
  reducers: {
    setResumeSkin: (state, action) => {
      state.skin = action.payload?.code;
      state.logo = action.payload?.logo;
    },
    setResumeId: (state, action) => {
      state.resumeId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResumeSkin, setResumeId } = resumeSlice.actions;
export default resumeSlice.reducer;
