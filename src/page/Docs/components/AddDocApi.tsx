import { FunctionComponent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import FullPageModal from 'src/components/Base/FullPageModal';
import InputField from 'src/components/Base/Input';
import SelectField from 'src/components/Base/SelectField';
import RequestBox, {
  IChangeInputData,
  IResFromData,
} from 'src/components/Common/APIDoc/RequestBox';
import ResponseBox from 'src/components/Common/APIDoc/ResponseBox';
import useMemberOptions from 'src/hooks/project/useMemberOptions';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { METHOD_API } from 'src/lib/constants';
import {
  IResponseTypeOption,
  METHOD_OPTIONS,
  REQUEST_TYPE,
  RESPONSE_TYPE_OPTIONS,
  SELECT_OPTION,
  // SELECT_OPTION,
} from 'src/lib/constants/options';
import { DocTranslateKeyType } from 'src/lib/translations/vn/doc';
import { addSnackBar, createAppErr, spinLoading } from 'src/services/app';
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
  words: (title: DocTranslateKeyType) => string;
}

interface IApiBasicInfo {
  title: string;
  method: SELECT_OPTION;
  host: string;
  endpoint: string;
  description: string;
  members: SELECT_OPTION[];
}
const AddDocApi: FunctionComponent<IProps> = ({
  isShow,
  handleDismiss,
  words,
}) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IApiBasicInfo>({});
  const projectId = useAppSelector((state) => state.app.projectId);
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
  const [jsonEditor, setJsonEditor] = useState<boolean>(true);
  const [freeText, setFreeText] = useState<string>('');

  const memberOptions = useMemberOptions();
  const dispatch = useAppDispatch();

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

  const onChangeFormData = (isRes: boolean, data: IChangeInputData) => {
    if (isRes) {
      const newData = [...resFormData];
      newData[data.index] = {
        ...newData[data.index],
        [data.key]: data.value,
      };
      setResFormData(newData);
    } else {
      const newData = [...reqFormData];
      newData[data.index] = {
        ...newData[data.index],
        [data.key]: data.value,
      };
      setReqFormData(newData);
    }
  };

  const onAddDoc = (data: IApiBasicInfo) => {
    dispatch(spinLoading(true));
    const members = data.members.map((item: SELECT_OPTION) => ({
      id_member: item.value,
      name: item.label,
    }));
    createDocApi({
      docData: {
        title: data.title,
        method: data.method.value as METHOD_API,
        host: data.host,
        endpoint: data.endpoint,
        description: data.description,
        members,
        requestType: requestType,
        responseBody: jsonEditor ? reqJson : reqFormData,
        responseType: typeResDisplay.value,
        requestBody:
          typeResDisplay.value === 'json'
            ? resJson
            : typeResDisplay.value === 'text'
            ? freeText
            : resFormData,
      },
      projectId: projectId,
    })
      .then(() => {
        dispatch(
          addSnackBar({ type: 'success', message: words('createSuccess') })
        );
        handleDismiss();
      })
      .catch((error) => {
        dispatch(
          createAppErr({
            title: words('createFail'),
            content: JSON.stringify(error),
          })
        );
      })
      .finally(() => {
        dispatch(spinLoading(false));
      });
  };

  return (
    <FullPageModal
      isShow={isShow}
      title={words('createApi')}
      btnTitle={words('createBtn')}
      disableSubmit={!isDirty || !isValid}
      handleDismiss={handleDismiss}
      handleClickSubmit={handleSubmit(onAddDoc)}
    >
      <AddDocApiWrapper>
        <InputField
          control={control}
          name="title"
          placeholder={words('title')}
          title={words('title')}
          rules={{ required: true }}
        />
        <div className="createDoc__header">
          <SelectField
            control={control}
            name="method"
            placeholder="Method"
            className="select_method"
            title="METHOD"
            options={METHOD_OPTIONS}
            rules={{ required: true }}
          />
          <InputField
            control={control}
            name="host"
            placeholder="HOST"
            title="HOST"
            rules={{ required: true }}
          />
          <InputField
            control={control}
            name="endpoint"
            placeholder="Endpoint"
            title="Endpoint"
            rules={{ required: true }}
          />
        </div>
        <SelectField
          control={control}
          name="members"
          placeholder={words('members')}
          className="select_member"
          title={words('members')}
          options={memberOptions}
          rules={{ required: true }}
          closeMenuOnSelect={false}
          isMulti
        />
        <InputField
          control={control}
          placeholder={words('description')}
          name="description"
          title={words('description')}
          rules={{ required: true }}
        />
        <RequestBox
          formData={reqFormData}
          handleAddFrom={handleAddForm}
          requestType={requestType}
          handleChangeReqType={handleChangeReqType}
          reqJson={reqJson}
          handleChangeJson={handleChangeReqJson}
          removeForm={removeForm}
          onChangeFormData={(_) => onChangeFormData(false, _)}
          jsonEditor={jsonEditor}
          changeEdit={() => setJsonEditor(!jsonEditor)}
        />
        <ResponseBox
          handleAddFrom={() => handleAddForm(true)}
          removeForm={(index) => removeForm(index, true)}
          formData={resFormData}
          resJson={resJson}
          handleChangeJson={handleChangeResJson}
          typeResDisplay={typeResDisplay}
          handleChangeTypeDisplay={changeTypeResDisplay}
          onChangeFormData={(_) => onChangeFormData(true, _)}
          freeText={freeText}
          changeFreeText={(value) => setFreeText(value)}
        />
      </AddDocApiWrapper>
    </FullPageModal>
  );
};

export default AddDocApi;
