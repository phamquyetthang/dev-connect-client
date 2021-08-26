
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/rootStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
