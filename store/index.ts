import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '@/store/counterSlice'

export function makeStore() {
    return configureStore({
        reducer: {counter: counterReducer},
    })
}

const index = makeStore()

export type AppState = ReturnType<typeof index.getState>

export type AppDispatch = typeof index.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppState,
    unknown,
    Action<string>>

export default index
