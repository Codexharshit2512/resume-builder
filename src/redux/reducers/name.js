import { createSlice } from "@reduxjs/toolkit";
import { contactState } from "../states/initStates";
import { store } from "../store/store";

export const contactSlice = createSlice({
  name: "contact",
  initialState: contactState,
  reducers: {
    updateContactSection: (state, action) => {
      return action.payload;
    },
    resetContact: (state, { payload }) => {
      const { firstName, lastName } = payload;
      return { ...contactState, firstName, lastName };
    },
    setDisplayName: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateContactSection, resetContact, setDisplayName } =
  contactSlice.actions;

export default contactSlice.reducer;
