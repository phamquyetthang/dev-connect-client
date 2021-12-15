import React from "react";
import { AllTheme } from "src/lib/theme";
import { PreferencesWrapper } from "./styles";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { addSnackBar, changeTheme } from "src/services/app";
import { ThemesName } from "src/lib/theme/types";
import clsx from "clsx";
import { changeThemeApi } from '../../services/app/api';
import { useAppSelector } from 'src/hooks/useAppSelector';

const Preferences = () => {
  const userId = useAppSelector(state=> state.user._id);
  const theme = useAppSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();
  const changeThemeMode = async(name: ThemesName) => {
    try {
      const response = await changeThemeApi(userId, name);
      if(response) {
        dispatch(changeTheme(name));
        dispatch(addSnackBar({type: 'success', message:'change color'}))
      }    
      
    } catch (error) {
      dispatch(addSnackBar({type: 'error', message:'change erorr'}))
    }
  };
  return (
    <PreferencesWrapper>
      <div className="itemThemes">
        <div>
          <p>hello</p>
          <p>good morning</p>
        </div>
        <div className="itemItem">
          {AllTheme.map((item) => (
            <div
              className={clsx("listSmall", { active: theme === item.name })}
              onClick={() => changeThemeMode(item.name)}
              style={{ backgroundColor: item.color }}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </PreferencesWrapper>
  );
};

export default Preferences;
