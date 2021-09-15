import Button from 'src/components/Base/Button';
import AddDocApi from './Modal/AddDocApi';

const UnitsScreen = () => {
  return (
    <div>
      <h1>Unit</h1>
      <div>
        <Button title="Tạo APi" onClick={() => null} />
      </div>
      <AddDocApi />
    </div>
  );
};

export default UnitsScreen;
