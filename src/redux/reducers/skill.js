import { createSlice } from "@reduxjs/toolkit";
import { skillState } from "../states/initStates";

export const skillSlice = createSlice({
  name: "skill",
  initialState: skillState,
  reducers: {
    updateSkillSection: (state, action) => {
      return action.payload;
    },
    resetSkills: (state) => {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSkillSection, resetSkills } = skillSlice.actions;

export default skillSlice.reducer;
