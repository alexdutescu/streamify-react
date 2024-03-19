import { createStore } from '@reduxjs/toolkit';
import MoviesReducer from '../reducers/MoviesReducer';

export const MoviesStore = createStore(MoviesReducer);