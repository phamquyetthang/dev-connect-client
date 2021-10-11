import { useCallback, useEffect, useState } from 'react';
import HeaderTool from 'src/components/Common/HeaderTool';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { createAppErr } from 'src/services/app';
import { getListDocsApi } from 'src/services/doc/api';
import AddDocApi from './Modal/AddDocApi';

const UnitsScreen = () => {
  const projectId = useAppSelector((state) => state.app.projectId);
  const dispatch = useAppDispatch();
  const [isShowAdd, setIsShowAdd] = useState<boolean>(false);
  const [listDocs, setListDocs] = useState([]);

  const getListDocs = useCallback(async () => {
    try {
      const data = await getListDocsApi(projectId);
      setListDocs(data);
    } catch (error) {
      dispatch(
        createAppErr({
          title: error as string,
        })
      );
    }
  }, [dispatch, projectId]);

  useEffect(() => {
    getListDocs();
  }, [getListDocs]);

  return (
    <div>
      <HeaderTool handleAddNew={() => setIsShowAdd(true)} />
      {listDocs.map((item) => (
        <div>{JSON.stringify(item)}</div>
      ))}
      <AddDocApi isShow={isShowAdd} handleDismiss={() => setIsShowAdd(false)} />
    </div>
  );
};

export default UnitsScreen;
