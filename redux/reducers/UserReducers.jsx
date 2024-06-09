const initialUserState = {
    isAuhenticated : false,
    user: null
}

const userReducer = (state = initialUserState, action) =>{
    switch(action.type){
        case 'set_user':
        return {
            ...state,
            isAuhenticated : true,
            user : action.payload,
        };
        case 'logout_user':
        return {
            ...state,
            isAuhenticated : false,
            user : null
        }
        default:
        return state;
    }
}

export default userReducer

// import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: null,
//     token: null,
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     clearUser: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { setUser, clearUser } = userSlice.actions;
// export default userSlice.reducer;