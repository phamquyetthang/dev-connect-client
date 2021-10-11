import { ChangeEvent, FunctionComponent, memo, useCallback } from 'react';
import Select from 'react-select';
import Button from 'src/components/Base/Button';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg';
import { RequestBoxWrapper } from './style';
import ReactJson, { InteractionProps } from 'react-json-view';
import {
  IRequestTypeOption,
  REQUEST_TYPE,
  REQUEST_TYPE_OPTIONS,
} from 'src/lib/constants/options';
import Switch from 'react-switch';
import { DATA_TYPES } from 'src/lib/constants';
import uniqueId from 'lodash/uniqueId';
export interface IResFromData {
  name: string;
  type: string;
  isRequired: boolean;
  example: string;
}

export interface IChangeInputData {
  key: string;
  value: string;
  index: number;
}
interface IProps {
  isEdit?: boolean;
  formData: IResFromData[];
  reqJson: object;
  handleAddFrom: () => void;
  requestType: REQUEST_TYPE;
  handleChangeReqType: (value: REQUEST_TYPE) => void;
  handleChangeJson: (value: object) => void;
  removeForm: (index: number) => void;
  onChangeFormData: ({ key, value, index }: IChangeInputData) => void;
  jsonEditor: boolean;
  changeEdit: () => void;
}

const RequestBox: FunctionComponent<IProps> = memo(
  ({
    isEdit = true,
    formData,
    reqJson,
    handleAddFrom,
    requestType,
    handleChangeReqType,
    handleChangeJson,
    removeForm,
    onChangeFormData,
    jsonEditor,
    changeEdit,
  }) => {
    const addFrom = useCallback(() => {
      handleAddFrom();
    }, [handleAddFrom]);

    const changeRequestType = (e: IRequestTypeOption | null) => {
      !!e && handleChangeReqType(e.value);
    };

    const changeJson = (e: InteractionProps) => {
      !!e && handleChangeJson(e.updated_src);
    };

    const handleChangeFormData = (
      e: ChangeEvent<HTMLInputElement>,
      index: number
    ) => {
      onChangeFormData({ key: e.target.name, value: e.target.value, index });
    };
    return (
      <RequestBoxWrapper>
        <div className="rq-header">
          <h3>Request</h3>
          <Select
            options={REQUEST_TYPE_OPTIONS}
            className="rq-select-type"
            onChange={changeRequestType}
            defaultValue={REQUEST_TYPE_OPTIONS[0]}
          />
        </div>
        {requestType === 'json' && (
          <div className="row json-type">
            <span>JSON editor</span>
            <Switch
              checked={jsonEditor}
              onChange={changeEdit}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
        )}

        {requestType === 'json' && jsonEditor ? (
          <div className="json-edit">
            <ReactJson
              style={{ padding: 16 }}
              src={reqJson}
              theme="monokai"
              onAdd={changeJson}
              onDelete={changeJson}
              onEdit={changeJson}
              displayObjectSize={true}
              enableClipboard={true}
            />
          </div>
        ) : (
          <div className="rq-form-data">
            {formData.map((item, index: number) => (
              <div className="rq-form-data__item" key={`req_from_${index}`}>
                <input
                  name="name"
                  placeholder="Tên"
                  value={item.name}
                  className="rq-form-data__item__field"
                  onChange={(e) => handleChangeFormData(e, index)}
                />
                <select
                  id="cars"
                  placeholder="Kiểu dữ liệu"
                  value={item.type}
                  name="type"
                  className="rq-form-data__item__field"
                  onChange={(e) => console.log(e)}
                >
                  {Object.values(DATA_TYPES).map((item) => (
                    <option value={item} key={uniqueId('data_type_doc_')}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="row">
                  <input
                    name="isRequired"
                    type="checkbox"
                    placeholder="required"
                    checked={item.isRequired}
                    id={`form-dt-require-check-${index}`}
                    onChange={(e) => handleChangeFormData(e, index)}
                  />
                  <label htmlFor={`form-dt-require-check-${index}`}>
                    Required
                  </label>
                </div>

                <input
                  name="example"
                  placeholder="Chú thích"
                  className="rq-form-data__item__field"
                  onChange={(e) => handleChangeFormData(e, index)}
                />
                {index !== 0 && isEdit && (
                  <button onClick={() => removeForm(index)}>
                    <TrashIcon />
                  </button>
                )}
              </div>
            ))}
            <Button
              title="Thêm"
              onClick={addFrom}
              className="rq-form-data__add_btn"
            />
          </div>
        )}
      </RequestBoxWrapper>
    );
  }
);

export default RequestBox;
