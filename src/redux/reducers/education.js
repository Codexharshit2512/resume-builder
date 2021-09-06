import { createSlice } from "@reduxjs/toolkit";
import { educationState } from "../states/initStates";
export const educationSlice = createSlice({
  name: "education",
  initialState: educationState,
  reducers: {
    updateEducationSection: (state, action) => {
      return action.payload;
    },
    resetEducation: (state) => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateEducationSection, resetEducation } =
  educationSlice.actions;

export default educationSlice.reducer;
