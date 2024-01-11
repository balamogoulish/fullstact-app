import axiosInstance from "../utils/axios"
import {createAsyncThunk} from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (userData, thunkAPI) => {
        try{
            const response = await axiosInstance.post(
                '/users/register',
                userData
            )
            return response.data;
        } catch (err){
            console.log(err);
            return thunkAPI.rejectWithValue(err.response.data || err.message)
        }
    }
)