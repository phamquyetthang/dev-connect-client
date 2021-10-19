import { ChangeEvent, FunctionComponent, memo } from 'react';
import Select from 'react-select';
import {
  IResponseTypeOption,
  RESPONSE_TYPE_OPTIONS,
} from 'src/lib/constants/options';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg';
import { RequestBoxWrapper } from './style';
import ReactJson, { InteractionProps } from 'react-json-view';
import Button from 'src/components/Base/Button';
import { IChangeInputData } from './RequestBox';
import { DATA_TYPES } from 'src/lib/constants';
import uniqueId from 'lodash/uniqueId';

export interface IFromData {
  name: string;
  type: string;
  isRequired: boolean;
  example: string;
}
interface IProps {
  handleAddFrom: () => void;
  removeForm: (index: number) => void;
  formData: IFromData[];
  resJson: object;
  handleChangeJson: (value: object) => void;
  handleChangeTypeDisplay: (value: IResponseTypeOption) => void;
  typeResDisplay: IResponseTypeOption;
  onChangeFormData: ({ key, value, index }: IChangeInputData) => void;
  freeText: string;
  changeFreeText: (value: string) => void;
}
const ResponseBox: FunctionComponent<IProps> = memo(
  ({
    handleAddFrom,
    removeForm,
    formData,
    resJson,
    handleChangeJson,
    handleChangeTypeDisplay,
    typeResDisplay,
    onChangeFormData,
    freeText,
    changeFreeText,
  }) => {
    const changeTypeDisplay = (e: IResponseTypeOption | null) => {
      e && handleChangeTypeDisplay(e);
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

    const renderForm = () => {
      switch (typeResDisplay?.value) {
        case 'json':
          return (
            <div className="json-edit">
              <ReactJson
                style={{ padding: 16 }}
                src={resJson}
                theme="monokai"
                onAdd={changeJson}
                onDelete={changeJson}
                onEdit={changeJson}
                displayObjectSize={true}
                enableClipboard={true}
              />
            </div>
          );
        case 'text':
          return <textarea className="response-text" value={freeText} onChange={(e) => changeFreeText(e.target.value)} />;
        default:
          return (
            <div className="rq-form-data">
              <div className="rq-form-data__item">
                <span>Tên trường</span>
              </div>
              {formData.map((item, index: number) => (
                <div className="rq-form-data__item" key={`res_from_${index}`}>
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
                  {index !== 0 && (
                    <button onClick={() => removeForm(index)}>
                      <TrashIcon />
                    </button>
                  )}
                  <Button
                    title="Thêm"
                    onClick={handleAddFrom}
                    className="rq-form-data__add_btn"
                  />
                </div>
              ))}
            </div>
          );
      }
    };

    return (
      <RequestBoxWrapper>
        <div className="rq-header">
          <h3>Request</h3>
          <Select
            options={RESPONSE_TYPE_OPTIONS}
            className="rq-select-type"
            onChange={changeTypeDisplay}
            defaultValue={typeResDisplay}
          />
        </div>
        {renderForm()}
      </RequestBoxWrapper>
    );
  }
);

export default ResponseBox;
