// Core
import { createSlice } from '@reduxjs/toolkit';
// Types
import { InitialState } from './employeesSlice.type';
import { employeesAPI } from '@/redux/services/employees/employees';

const initialState: InitialState = {
    employees: null,
}

const slice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(employeesAPI.endpoints.getAllEmployees.matchFulfilled, (state, action) =>{
                state.employees = action.payload
            } )
    }
})

export default slice.reducer;