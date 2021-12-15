import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import HeaderTool from 'src/components/Common/HeaderTool';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { getListTaskApi } from 'src/services/tasks/api';
import { ITask } from 'src/services/tasks/types';
import { TaskScreenSwapper } from './style';

const TaskScreen: FunctionComponent = () => {
  const projectId = useAppSelector((state) => state.app.projectId);

  const [listTask, setListTask] = useState<ITask[]>([]);

  const getListTask = useCallback(async () => {
    try {
      const result = await getListTaskApi(projectId);
      setListTask(result);
    } catch (error) {}
  }, [projectId]);

  useEffect(() => {
    getListTask();
  }, [getListTask]);

  return (
    <TaskScreenSwapper>
      <HeaderTool handleAddNew={() => null} />
      {/* {listTask.map((i) => (
        <h1>{i.title}</h1>
      ))} */}
      {JSON.stringify(listTask)}
    </TaskScreenSwapper>
  );
};

export default TaskScreen;
