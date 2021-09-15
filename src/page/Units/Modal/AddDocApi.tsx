import { useForm } from 'react-hook-form';
import InputField from 'src/components/Base/Input';
import Modal from 'src/components/Base/Modal';
import SelectField from 'src/components/Base/SelectField';

import { AddDocApiWrapper } from './style';

const AddDocApi = () => {
  const { control } = useForm();
  return (
    <Modal
      isShow={true}
      title="Them api"
      submitBtn="Hoàn thành"
      onClose={() => null}
      onSubmit={() => null}
      closeBtn="Hủy"
    >
      <AddDocApiWrapper>
        <InputField control={control} name="name" placeholder="Tiêu đề" />
        <div className="row createDoc__header">
          <SelectField control={control} name="method" placeholder="Method" />
          <InputField
            control={control}
            name="endpoint"
            placeholder="Endpoint"
          />
        </div>
      </AddDocApiWrapper>
    </Modal>
  );
};

export default AddDocApi;
