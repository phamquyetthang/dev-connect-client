import { uniqueId } from 'lodash';
import { FunctionComponent, useEffect } from 'react';
import Box from 'src/components/Base/Box';
import { ContainerWrapper } from 'src/globalStyle';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { IProjectsListRes } from 'src/services/project/types';
import { getUserInfoService } from 'src/services/user';
import { ProjectListWrapper } from './style';
interface IProps {
  data: IProjectsListRes[];
}
const ProjectList: FunctionComponent<IProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInfoService());
  }, [dispatch]);
  return (
    <ContainerWrapper className="flex-center">
      <ProjectListWrapper>
        {data.map((item: IProjectsListRes) => (
          <Box className="project" key={uniqueId('project_list_')}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.originator.name}</p>
          </Box>
        ))}
      </ProjectListWrapper>
    </ContainerWrapper>
  );
};

export default ProjectList;
