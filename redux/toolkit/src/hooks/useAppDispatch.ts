// Core
import { useDispatch } from 'react-redux';
// Types
import { AppDispatch } from './../store/index';

export const useAppDispatch = () => useDispatch<AppDispatch>();