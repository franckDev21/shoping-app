import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ShowMenuState {
  showMenu: boolean
}

const initialState: ShowMenuState = {
  showMenu: true,
}

export const notificationSlice = createSlice({
  name: 'showMenu',
  initialState,
  reducers: {
    toggleValue: (state) => {
      state.showMenu = !state.showMenu
    },
    setValue: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload
    },
  },
})

export const { toggleValue, setValue} = notificationSlice.actions

export default notificationSlice