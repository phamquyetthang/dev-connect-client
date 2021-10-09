import { ChangeEvent, useState } from 'react';
import Button from 'src/components/Base/Button';
import { InputNormal } from 'src/components/Base/Input';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { addMember } from 'src/services/project/api';

const Dashboard = () => {
  const projectInfo = useAppSelector((state) => state.project.info);
  const [addMem, setAddMem] = useState<string>('');
  const handleChangeAdd = (e: ChangeEvent<HTMLInputElement>) => {
    setAddMem(e.target.value);
  };
  const onAddMember = async () => {
    try {
      if (projectInfo?._id) {
        const result = await addMember(addMem, projectInfo._id);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ul>
        {projectInfo?.members?.map((item) => (
          <li key={item.member_id}><h3>{item.name}</h3></li>
        ))}
      </ul>
      <div>
        <InputNormal
          title="Thêm thành viên"
          onChange={handleChangeAdd}
          value={addMem}
        />
        <Button onClick={onAddMember} title="Thêm thành viên" />
      </div>
    </div>
  );
};

export default Dashboard;
