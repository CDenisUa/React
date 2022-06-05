// Core
import { useSelector } from 'react-redux';
// Types
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;