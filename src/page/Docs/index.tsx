import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import APIBox from 'src/components/Common/APIBox';
import HeaderTool from 'src/components/Common/HeaderTool';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { DocTranslateKeyType } from 'src/lib/translations/vn/doc';
import { createAppErr } from 'src/services/app';
import { getListDocsApi } from 'src/services/doc/api';
import AddDocApi from './components/AddDocApi';
import IDoc from '../../services/doc/types';
import { DocsScreenWrapper } from './style';
import DetailApiModal from './components/DetailApiModal';

const DocsScreen = () => {
  const projectId = useAppSelector((state) => state.app.projectId);
  const dispatch = useAppDispatch();

  const [isShowAdd, setIsShowAdd] = useState<boolean>(false);
  const [listDocs, setListDocs] = useState<IDoc[]>([]);
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const [detailDoc, setDetailDoc] = useState<IDoc>();

  const { t } = useTranslation();
  const words = useCallback(
    (title: DocTranslateKeyType) => t(`docTranslate.${title}`),
    [t]
  );

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

  const onOpenDetail = (id: string) => {
    if (detailDoc?._id !== id) {
      setDetailDoc(listDocs.find((item) => item._id === id));
    }
    setIsShowDetail(true);
  };

  return (
    <DocsScreenWrapper>
      <HeaderTool handleAddNew={() => setIsShowAdd(true)} />
      <div className="docScreen__list_doc">
        {listDocs.map((item) => (
          <APIBox
            docData={item}
            key={item._id}
            onClickBox={() => onOpenDetail(item._id)}
          />
        ))}
      </div>
      {detailDoc && (
        <DetailApiModal
          isShow={isShowDetail}
          data={detailDoc}
          onClose={() => setIsShowDetail(false)}
          words={words}
        />
      )}
      <AddDocApi
        isShow={isShowAdd}
        handleDismiss={() => setIsShowAdd(false)}
        words={words}
      />
    </DocsScreenWrapper>
  );
};

export default DocsScreen;
