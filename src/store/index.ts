import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

// import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {},
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// export const wrapper = createWrapper<RootState>(store.getState);
