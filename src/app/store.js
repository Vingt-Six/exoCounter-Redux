import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../features/counter'

export default configureStore({
    reducer: {
        counter : counterSlice,
    }
})