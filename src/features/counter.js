import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementInput: (state, action) => {
            state.value += action.payload
        },
        decrementInput: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const { increment, decrement, incrementInput, decrementInput } = counterSlice.actions
export default counterSlice.reducer