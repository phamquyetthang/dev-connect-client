import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import ROUTER_NAME from 'src/lib/constants/router';
import { getInfoService } from 'src/services/project';

const Dashboard = () => {
  const projectId = useAppSelector((state) => state.app.projectId);
  const projectInfo = useAppSelector((state) => state.project.info);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!projectId) {
      history.push(ROUTER_NAME.welcome.path);
    }
    dispatch(getInfoService({ id: projectId }));
  }, [dispatch, history, projectId]);

  return (
    <div>
      <h1>{JSON.stringify(projectInfo)}</h1>
    </div>
  );
};

export default Dashboard;
