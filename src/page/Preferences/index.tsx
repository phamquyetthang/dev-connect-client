import React, { useState, useEffect, ChangeEvent } from "react";
import { AllTheme } from "src/lib/theme";
import { PreferencesWrapper } from "./styles";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { addSnackBar, changeLanguage, changeTheme } from "src/services/app";
import { ThemesName } from "src/lib/theme/types";
import clsx from "clsx";
import {
  changeInfoBasic,
  changeThemeApi,
  getInfoProfile,
  changeInfoNotNormal,
  changePassword,
} from "../../services/app/api";
import { useAppSelector } from "src/hooks/useAppSelector";
import i18n from "./../../i18n";
import { InputNormal } from "src/components/Base/Input";
import Box from "src/components/Base/Box";
import Button from "src/components/Base/Button";
import Modal from "./../../components/Base/Modal/index";

interface IUserNotNormal {
  company: string;
  website: string;
  location: string;
  status: string;
  skills: string;
  bio: string;
}

interface IUserBasic {
  last_name: string;
  first_name: string;
  email: string;
}

interface IChangePassword {
  oldPassWord: string;
  newPassWord: string;
}

const Preferences = () => {
  const userId = useAppSelector((state) => state.user._id);
  const theme = useAppSelector((state) => state.app.theme);
  const [dataNotNormal, setDataNotNormal] = useState<IUserNotNormal>({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
  });
  const [dataBasic, setDataBasic] = useState<IUserBasic>({
    last_name: "",
    first_name: "",
    email: "",
  });

  const [paramChangePw, setParamChangePw] = useState<IChangePassword>({
    oldPassWord: "",
    newPassWord: "",
  });

  const [editBasic, setEditBasic] = useState<boolean>(false);
  const [editNormal, setEditNormal] = useState<boolean>(false);
  const [isShowChangPw, setIsShowChangePw] = useState<boolean>(false);
  const [showError, setShowError] = useState<string>("");

  const dispatch = useAppDispatch();
  const changeThemeMode = async (name: ThemesName) => {
    try {
      const response = await changeThemeApi(userId, name);
      if (response) {
        dispatch(changeTheme(name));
        dispatch(addSnackBar({ type: "success", message: "change color" }));
      }
    } catch (error) {
      dispatch(addSnackBar({ type: "error", message: "change erorr" }));
    }
  };
  const onChange = (lang: "vn" | "en") => {
    i18n.changeLanguage(lang);
    dispatch(changeLanguage(lang));
  };

  useEffect(() => {
    getAllUserInfo();
  }, []);

  const getAllUserInfo = async () => {
    const { user, ...profile } = await getInfoProfile();
    if (user) {
      setDataBasic(user);
    }
    if (profile) {
      setDataNotNormal(profile);
    }
  };
  const onChangeBasic = (event: ChangeEvent<HTMLInputElement>) => {
    setDataBasic({ ...dataBasic, [event.target.name]: event?.target.value });
  };
  const onChangeNotNormal = (event: ChangeEvent<HTMLInputElement>) => {
    setDataNotNormal({
      ...dataNotNormal,
      [event.target.name]: event?.target.value,
    });
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setParamChangePw({
      ...paramChangePw,
      [event.target.name]: event?.target.value.trim(),
    });
  };

  const saveBasic = async () => {
    setEditBasic(!editBasic);
    if (editBasic) {
      try {
        const response = await changeInfoBasic(
          dataBasic.first_name,
          dataBasic.last_name,
          dataBasic.email
        );
        console.log("response chagne", response);
      } catch (error) {
        console.log("response error", error);
      }
    }
  };

  const saveNotNormal = async () => {
    setEditNormal(!editNormal);
    if (editBasic) {
      try {
        const response = await changeInfoNotNormal(
          dataNotNormal.company,
          dataNotNormal.website,
          dataNotNormal.location,
          dataNotNormal.status,
          dataNotNormal.skills,
          dataNotNormal.bio
        );
      } catch (error) {}
    }
  };

  const saveChangePassword = async () => {
    try {
      const response = await changePassword(
        paramChangePw.oldPassWord,
        paramChangePw.newPassWord
      );
      console.log("this is change pw", response);
      dispatch(addSnackBar({ type: "success", message: "change password" }));
      setIsShowChangePw(false);
    } catch (error) {
      console.log("error change pw", error);
      setShowError(JSON.stringify(error));
    }
  };

  return (
    <PreferencesWrapper>
      <div className="itemThemes">
        <div>
          <Box>
            <div className="titleEditBasic">
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Edit Basic Info
              </p>
              <Button
                onClick={saveBasic}
                title={editBasic ? "Save" : "Edit"}
              ></Button>
            </div>
            <InputNormal
              title="first_name"
              className="viewInputNormal"
              name="first_name"
              value={dataBasic?.first_name}
              onChange={onChangeBasic}
              disable={!editBasic}
            />
            <InputNormal
              title="last_name"
              className="viewInputNormal"
              name="last_name"
              value={dataBasic?.last_name}
              onChange={onChangeBasic}
              disable={!editBasic}
            />
            <InputNormal
              title="email"
              className="viewInputNormal"
              name="email"
              value={dataBasic?.email}
              onChange={onChangeBasic}
              disable={!editBasic}
            />
            <div className="titleEditBasic">
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Do you want to change Password
              </p>
              <Button
                onClick={() => setIsShowChangePw(true)}
                title={"Change Password"}
              ></Button>
            </div>
          </Box>
          <Box>
            <div className="titleEditBasic">
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Edit Not Normal Info
              </p>
              <Button
                onClick={saveNotNormal}
                title={editNormal ? "Save" : "Edit"}
              ></Button>
            </div>
            <div className="stylesBox">
              <InputNormal
                title="company"
                className="viewInputNormal"
                name="company"
                value={dataNotNormal.company}
                onChange={onChangeNotNormal}
                disable={!editNormal}
              />
              <InputNormal
                title="website"
                className="viewInputNormal"
                name="website"
                value={dataNotNormal.website}
                onChange={onChangeNotNormal}
                disable={!editNormal}
              />
              <InputNormal
                title="location"
                className="viewInputNormal"
                name="location"
                value={dataNotNormal.location}
                onChange={onChangeNotNormal}
                disable={!editNormal}
              />
              <InputNormal
                title="status"
                className="viewInputNormal"
                name="status"
                value={dataNotNormal.status}
                onChange={onChangeNotNormal}
                disable={!editNormal}
              />
              <InputNormal
                title="skill"
                className="viewInputNormal"
                name="skill"
                value={dataNotNormal.skills}
                onChange={onChangeNotNormal}
                disable={!editNormal}
              />
              <InputNormal
                className="viewInputNormal"
                title="bio"
                name="bio"
                value={dataNotNormal.bio}
                onChange={onChangeNotNormal}
                disable={!editNormal}
              />
            </div>
          </Box>
        </div>
      </div>
      <div className="itemThemes">
        <div className="textIntro">
          <p style={{ fontSize: 18, fontWeight: "bold" }}>Change Language 👉</p>
        </div>
        <div className="change-langues-option">
          <button onClick={() => onChange("vn")} className="lang_option">
            🇻🇳 Tiếng Việt
          </button>
          <button onClick={() => onChange("en")} className="lang_option">
            🇬🇧 English
          </button>
        </div>
      </div>

      <div className="itemThemes">
        <div className="textIntro">
          <p style={{ fontSize: 18, fontWeight: "bold", paddingRight: 20 }}>
            Navigation theme
          </p>
          <p style={{ paddingRight: 20 }}>
            Customize the appearance of the application header and navigation
            sidebar.
          </p>
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
      <Modal
        isShow={isShowChangPw}
        closeBtn={"Close"}
        submitBtn="Confirm"
        title="Change Password"
        onClose={() => setIsShowChangePw(false)}
        onSubmit={saveChangePassword}
      >
        <Box>
          <InputNormal
            title="Old password"
            className="viewInputNormal"
            name="oldPassWord"
            value={paramChangePw.oldPassWord}
            onChange={onChangePassword}
          />
          <InputNormal
            title="New password"
            className="viewInputNormal"
            name="newPassWord"
            value={paramChangePw.newPassWord}
            onChange={onChangePassword}
          />
          <span>{showError}</span>
        </Box>
      </Modal>
    </PreferencesWrapper>
  );
};

export default Preferences;
