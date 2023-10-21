import { COOKIE_ITEM, STORAGE_ITEM } from '@/constants'
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
  isAdminLogged: !!Cookies.get(COOKIE_ITEM.ADMIN_TOKEN) || false,
  adminInfo:
    typeof window !== 'undefined'
      ? localStorage.getItem(STORAGE_ITEM.ADMIN_USER_INFO)
        ? JSON.parse(localStorage.getItem(STORAGE_ITEM.ADMIN_USER_INFO) || '{}')
        : JSON.parse(
            sessionStorage.getItem(STORAGE_ITEM.ADMIN_USER_INFO) || '{}',
          )
      : {},
}

export const adminLoginSlice = createSlice({
  name: 'adminLogin',
  initialState,
  reducers: {
    loginAdminSuccess: (state, action) => {
      state.isAdminLogged = true
      state.adminInfo = action.payload.adminInfo

      if (action.payload.remember) {
        Cookies.set(
          COOKIE_ITEM.ADMIN_TOKEN,
          action.payload.adminInfo?.access_token || '',
        )
      } else {
        Cookies.set(
          COOKIE_ITEM.ADMIN_TOKEN,
          action.payload.adminInfo?.access_token || '',
        )
      }

      localStorage.setItem(
        STORAGE_ITEM.ADMIN_USER_INFO,
        JSON.stringify({
          ...action.payload.adminInfo,
          access_token: undefined,
        }),
      )
    },

    logoutAdmin: (state) => {
      state.isAdminLogged = false
      state.adminInfo = {}

      Cookies.remove(COOKIE_ITEM.ADMIN_TOKEN)
      localStorage.removeItem(STORAGE_ITEM.ADMIN_USER_INFO)
    },
  },
})

export const { loginAdminSuccess, logoutAdmin } = adminLoginSlice.actions

export default adminLoginSlice.reducer
