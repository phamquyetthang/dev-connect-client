import { useState } from 'react';
import Button from 'src/components/Base/Button';
import AddDocApi from './Modal/AddDocApi';

const UnitsScreen = () => {
  const [isShowAdd, setIsShowAdd] = useState<boolean>(false);
  return (
    <div>
      <h1>Unit</h1>
      <div>
        <Button title="Tạo APi" onClick={() => setIsShowAdd(true)} />
      </div>
      <AddDocApi isShow={isShowAdd} handleDismiss={() => setIsShowAdd(false)} />
    </div>
  );
};

export default UnitsScreen;
