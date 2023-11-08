import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, subscriptionReducer, userReducer } from './reducers/userReducer.js';
import { courseReducer } from './reducers/courseReducer.js';
import {adminReducer} from './reducers/adminReducer.js';
import { otherReducer } from './reducers/otherReducer.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other:otherReducer,
  },
});

export default store;

export const server = 'https://coursebundler-8v3y.onrender.com/api/v1';
