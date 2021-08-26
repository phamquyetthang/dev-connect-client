import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/rootStore';
export const useAppDispatch = () => useDispatch<AppDispatch>();
