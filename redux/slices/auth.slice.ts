import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface AuthSlice {
  isConnected: boolean
  user: any
}

const initialState: AuthSlice = {
  isConnected: false,
  user: null,
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: any }>) => {
      state.isConnected = true
      state.user = action.payload.user
    },
    logout: (state) => {
      state.isConnected = false
      state.user = null
    },
    clearAuth: (state) => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, clearAuth } = AuthSlice.actions

export default AuthSlice.reducer
