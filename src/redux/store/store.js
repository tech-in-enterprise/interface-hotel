import {configureStore} from '@reduxjs/toolkit'
import loginSlice from '../slice/auth/loginSlice'
import menuReducer from '../slice/menuSlice'
import departmentSlice from '../slice/departments/departments'
import serviceSlice from '../slice/departments/serviceSlice'
import hotelSlice from '../slice/admin/register-hotel'
import roleSlice from '../slice/roles/roleSlice'



export const store = configureStore({
    reducer:{
        auth: loginSlice,
        menu: menuReducer,
        roles: roleSlice,
        hotel: hotelSlice,
        departments: departmentSlice,
        services: serviceSlice,
    },
})