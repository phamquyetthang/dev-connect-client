import { useAppSelector } from 'src/hooks/useAppSelector';

const Dashboard = () => {
  const projectInfo = useAppSelector((state) => state.project.info);

  return (
    <div>
      <h1>{JSON.stringify(projectInfo)}</h1>
    </div>
  );
};

export default Dashboard;
