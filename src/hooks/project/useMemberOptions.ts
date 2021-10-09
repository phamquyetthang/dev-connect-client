import { SELECT_OPTION } from 'src/lib/constants/options';
import { useAppSelector } from '../useAppSelector';

const useMemberOptions = () => {
  const member = useAppSelector((state) => state.project.info?.members);
  const options: SELECT_OPTION[] =
    member?.map((item) => ({
      value: item.member_id,
      label: item.name,
    })) || [];

  return options;
};

export default useMemberOptions;
