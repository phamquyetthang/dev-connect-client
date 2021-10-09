import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import Button from 'src/components/Base/Button';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import ROUTER_NAME from 'src/lib/constants/router';
import { WelcomeTranslateKeyType } from 'src/lib/translations/vn/welcome';
import { setProjectId } from 'src/services/app';
import { createProjectApi, getProjectsApi } from 'src/services/project/api';
import { IProjectsListRes } from 'src/services/project/types';
import CreateProject from './components/CreateProject';
import ProjectList from './components/Projects';
import { WelcomeWrapper } from './style';

const Welcome = () => {
  const [listProjects, setListProjects] = useState<IProjectsListRes[]>([]);
  const [isShowCreate, setIsShowCreate] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const word = useCallback(
    (title: WelcomeTranslateKeyType) => t(`welcomeTranslate.${title}`),
    [t]
  );
  const history = useHistory();
  const handleSubmitCreate = async (data: any) => {
    try {
      const res = await createProjectApi(data);
      if (res) {
        getList();
        setIsShowCreate(false);
      }
    } catch (error) {}
  };

  const getList = async () => {
    try {
      const res = await getProjectsApi();
      setListProjects(res);
    } catch (error) {}
  };
  useEffect(() => {
    getList();
  }, []);

  const gotoDashboard = (id: string) => {
    dispatch(setProjectId(id));
    history.push(ROUTER_NAME.dashboard.path);
  };

  return (
    <WelcomeWrapper>
      <h1>CS DEV CONNECT</h1>
      <Button title={word('add')} onClick={() => setIsShowCreate(true)} />
      <div></div>
      <CreateProject
        isShowCreate={isShowCreate}
        onCloseCreate={() => setIsShowCreate(false)}
        onSubmitCreate={handleSubmit(handleSubmitCreate)}
        control={control}
      />
      <ProjectList data={listProjects} clickProject={gotoDashboard} />
    </WelcomeWrapper>
  );
};

export default Welcome;
