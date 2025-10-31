import { configureStore } from '@reduxjs/toolkit';
import reducers from './src/features/todo' 



export const store= configureStore({

reducer : reducers

});