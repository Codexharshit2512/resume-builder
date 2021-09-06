import { createSlice } from "@reduxjs/toolkit";
import { experianceState } from "../states/initStates";

export const experianceSlice = createSlice({
  name: "experiance",
  initialState: experianceState,
  reducers: {
    updateExperianceSection: (state, action) => {
      return action.payload;
    },
    resetExperiance: (state) => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateExperianceSection, resetExperiance } =
  experianceSlice.actions;

export default experianceSlice.reducer;
