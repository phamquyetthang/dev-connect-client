import { uniqueId } from 'lodash';
import { FunctionComponent } from 'react';
import Box from 'src/components/Base/Box';
import { ContainerWrapper } from 'src/globalStyle';
import { IProjectsListRes } from 'src/services/project/types';
import { ProjectListWrapper } from './style';
interface IProps {
  data: IProjectsListRes[];
  clickProject: (id: string) => void;
}
const ProjectList: FunctionComponent<IProps> = ({ data, clickProject }) => {
  return (
    <ContainerWrapper className="flex-center">
      <ProjectListWrapper>
        {data.map((item: IProjectsListRes) => (
          <Box className="project" key={uniqueId('project_list_')} onClickBox={() => clickProject(item._id)} >
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
