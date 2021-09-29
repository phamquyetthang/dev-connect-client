import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import FullPageModal from 'src/components/Base/FullPageModal';
import InputField from 'src/components/Base/Input';
import SelectField from 'src/components/Base/SelectField';
import RequestBox from 'src/components/Common/APIDoc/RequestBox';
import ResponseBox from 'src/components/Common/APIDoc/ResponseBox';

import { AddDocApiWrapper } from './style';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

interface IProps {
  isShow: boolean;
  handleDismiss: () => void;
}
const AddDocApi: FunctionComponent<IProps> = ({ isShow, handleDismiss }) => {
  const { control } = useForm();

  return (
    <FullPageModal
      isShow={isShow}
      title="Them api"
      btnTitle="Hoàn thành"
      handleDismiss={handleDismiss}
      handleClickSubmit={() => null}
    >
      <AddDocApiWrapper>
        <InputField
          control={control}
          name="name"
          placeholder="Tiêu đề"
          title="Tiêu đề"
        />
        <div className="createDoc__header">
          <SelectField
            control={control}
            name="method"
            placeholder="Method"
            className="select_method"
            title="METHOD"
            options={options}
          />
          <InputField
            control={control}
            name="endpoint"
            placeholder="HOST"
            title="HOST"
          />
          <InputField
            control={control}
            name="endpoint"
            placeholder="Endpoint"
            title="Endpoint"
          />
        </div>
        <SelectField
          control={control}
          name="members"
          placeholder="Members"
          className="select_method"
          title="Thành viên"
          options={options}
          isMulti
        />
        <InputField
          control={control}
          placeholder="Mô tả"
          name="description"
          title="Mô tả"
        />
        <RequestBox />
        <ResponseBox />
      </AddDocApiWrapper>
    </FullPageModal>
  );
};

export default AddDocApi;
