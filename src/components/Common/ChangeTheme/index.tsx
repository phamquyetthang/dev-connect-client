import Switch from 'react-switch';
import { ReactComponent as SunIcon } from 'src/assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'src/assets/icons/moon.svg';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { onDarkMode } from 'src/services/app';

// import './style.ts'

const ChangeTheme = () => {
  // use
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.app.theme);
  const checked = useMemo(() => theme === 'light', [theme]);

  const handelChangeTheme = useCallback(() => {
    dispatch(onDarkMode(checked));
  }, [checked, dispatch]);

  return (
    <Switch
      checked={checked}
      onChange={handelChangeTheme}
      checkedHandleIcon={<SunIcon />}
      checkedIcon={false}
      uncheckedIcon={false}
      onColor="#87ceeb"
      offColor="#525252"
      uncheckedHandleIcon={<MoonIcon />}
      height={28}
      onHandleColor="#87ceeb"
      className="theme-switch-btn"
    />
  );
};

export default ChangeTheme;
