import { useAppSelector } from '../useAppSelector';

const useMembers = () => {
  const member = useAppSelector((state) => state.project.info?.members);

  return member;
};

export default useMembers;
