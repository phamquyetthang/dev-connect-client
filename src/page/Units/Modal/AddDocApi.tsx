import { FunctionComponent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import FullPageModal from 'src/components/Base/FullPageModal';
import InputField from 'src/components/Base/Input';
import SelectField from 'src/components/Base/SelectField';
import RequestBox, {
  IResFromData,
} from 'src/components/Common/APIDoc/RequestBox';
import ResponseBox from 'src/components/Common/APIDoc/ResponseBox';
import useMemberOptions from 'src/hooks/project/useMemberOptions';
import {
  IResponseTypeOption,
  METHOD_OPTIONS,
  REQUEST_TYPE,
  RESPONSE_TYPE_OPTIONS,
  // SELECT_OPTION,
} from 'src/lib/constants/options';
import { createDocApi } from 'src/services/doc/api';

import { AddDocApiWrapper } from './style';

const initFormData = {
  name: '',
  type: '',
  isRequired: true,
  example: '',
};

interface IProps {
  isShow: boolean;
  handleDismiss: () => void;
}

// interface IState {
//   title: string;
//   method: SELECT_OPTION;
//   endpoint: string;
//   member: SELECT_OPTION[];
// }
// const initState : IState= {
//   title: '',
//   method: { value: '', label: '' },
//   endpoint: '',
//   member: [],
// };
const AddDocApi: FunctionComponent<IProps> = ({ isShow, handleDismiss }) => {
  const { control, handleSubmit } = useForm({});

  const [reqFormData, setReqFormData] = useState<IResFromData[]>([
    initFormData,
  ]);
  const [resFormData, setResFormData] = useState<IResFromData[]>([
    initFormData,
  ]);

  const [requestType, setRequestType] = useState<REQUEST_TYPE>(
    REQUEST_TYPE.JSON
  );

  const [typeResDisplay, setTypeResDisplay] = useState<IResponseTypeOption>(
    RESPONSE_TYPE_OPTIONS[1]
  );
  const [reqJson, setReqJson] = useState({});
  const [resJson, setResJson] = useState({});

  const memberOptions = useMemberOptions();

  const handleAddForm = (isRes: boolean = false) => {
    if (isRes) {
      setResFormData((pre) => {
        return [...pre, initFormData];
      });
    } else {
      setReqFormData((pre) => {
        return [...pre, initFormData];
      });
    }
  };
  const handleChangeReqType = (value: REQUEST_TYPE) => {
    setRequestType(value);
  };
  const changeTypeResDisplay = (value: IResponseTypeOption) => {
    setTypeResDisplay(value);
  };
  const handleChangeReqJson = (value: object) => {
    setReqJson(value);
  };

  const handleChangeResJson = (value: object) => {
    setResJson(value);
  };

  const removeForm = useCallback(
    (index: number, isRes: boolean = false) => {
      const oldForms = isRes ? [...resFormData] : [...reqFormData];
      const leftArr = oldForms.slice(0, index);
      const rightArr = oldForms.slice(index + 1);
      if (isRes) {
        setResFormData(
          leftArr.concat(index < reqFormData.length ? rightArr : [])
        );
      } else {
        setReqFormData(
          leftArr.concat(index < reqFormData.length ? rightArr : [])
        );
      }
    },
    [reqFormData, resFormData]
  );

  const onAddDoc = async (data: any) => {
    try {
      createDocApi({
        ...data,
      });
    } catch (error) {}
  };

  return (
    <FullPageModal
      isShow={isShow}
      title="Them api"
      btnTitle="Hoàn thành"
      handleDismiss={handleDismiss}
      handleClickSubmit={handleSubmit(onAddDoc)}
    >
      <AddDocApiWrapper>
        <InputField
          control={control}
          name="title"
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
            options={METHOD_OPTIONS}
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
          options={memberOptions}
          closeMenuOnSelect={false}
          isMulti
        />
        <InputField
          control={control}
          placeholder="Mô tả"
          name="description"
          title="Mô tả"
        />
        <RequestBox
          formData={reqFormData}
          handleAddFrom={handleAddForm}
          requestType={requestType}
          handleChangeReqType={handleChangeReqType}
          reqJson={reqJson}
          handleChangeJson={handleChangeReqJson}
          removeForm={removeForm}
        />
        <ResponseBox
          handleAddFrom={() => handleAddForm(true)}
          removeForm={(index) => removeForm(index, true)}
          formData={resFormData}
          resJson={resJson}
          handleChangeJson={handleChangeResJson}
          typeResDisplay={typeResDisplay}
          handleChangeTypeDisplay={changeTypeResDisplay}
        />
      </AddDocApiWrapper>
    </FullPageModal>
  );
};

export default AddDocApi;
