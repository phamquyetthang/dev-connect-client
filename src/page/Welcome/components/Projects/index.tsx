import { FunctionComponent } from 'react';
import Box from 'src/components/Base/Box';
import { ContainerWrapper } from 'src/globalStyle';
import { IProjectsListRes } from 'src/services/project/types';
import { ProjectListWrapper } from './style';
interface IProps {
  data: IProjectsListRes[];
}
const ProjectList: FunctionComponent<IProps> = ({ data }) => {
  return (
    <ContainerWrapper className="flex-center">
      <ProjectListWrapper>
        {data.map((item: IProjectsListRes) => (
          <Box className="project">
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
