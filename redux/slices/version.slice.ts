import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface Version {
  version: string
}

const initialState: Version = {
  version: "0.0.0",
}

export const versionSlice = createSlice({
  name: "version",
  initialState,
  reducers: {
    updateVersion: (state, action: PayloadAction<{ version: string }>) => {
      state.version = action.payload.version
    },
    clearVersion: (state) => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateVersion } = versionSlice.actions

export default versionSlice.reducer
