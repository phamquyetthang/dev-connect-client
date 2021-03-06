import {
  FunctionComponent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import HistoryLog from 'src/components/Common/HistoryLog';
import { getDocHistoryApi } from 'src/services/doc/api';
import { IDocHistory } from 'src/services/doc/types';

interface IProps {
  docId: string;
}

const HistoryTab: FunctionComponent<IProps> = memo(({ docId }) => {
  const [histories, setHistories] = useState<IDocHistory[]>([]);
  const getDocHistory = useCallback(async () => {
    try {
      const result = await getDocHistoryApi(docId);
      setHistories(result);
    } catch (error) {}
  }, [docId]);

  useEffect(() => {
    getDocHistory();
  }, [getDocHistory]);

  return <HistoryLog histories={histories} />;
});

export default HistoryTab;
