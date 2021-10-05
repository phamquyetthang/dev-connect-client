import { FunctionComponent } from 'react';
import Select from 'react-select';
import { uniqueId } from 'lodash';
import {
  IResponseTypeOption,
  RESPONSE_TYPE_OPTIONS,
} from 'src/lib/constants/options';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg';
import { RequestBoxWrapper } from './style';
import ReactJson, { InteractionProps } from 'react-json-view';
import Button from 'src/components/Base/Button';

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
  typeResDisplay:IResponseTypeOption;
}
const ResponseBox: FunctionComponent<IProps> = ({
  handleAddFrom,
  removeForm,
  formData,
  resJson,
  handleChangeJson,
  handleChangeTypeDisplay,
  typeResDisplay,
}) => {
  const changeTypeDisplay = (e: IResponseTypeOption | null) => {
    e && handleChangeTypeDisplay(e);
  };
  const changeJson = (e: InteractionProps) => {
    !!e && handleChangeJson(e.updated_src);
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
        return <textarea className="response-text" />;
      default:
        return (
          <div className="rq-form-data">
            {formData.map((item, index: number) => (
              <div className="rq-form-data__item" key={uniqueId('req_from_')}>
                <input
                  name="name"
                  placeholder="Tên"
                  value={item.name}
                  className="rq-form-data__item__field"
                />
                <select
                  id="cars"
                  placeholder="Kiểu dữ liệu"
                  value={item.type}
                  name="type"
                  className="rq-form-data__item__field"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="vw">VW</option>
                  <option value="audi" selected>
                    Audi
                  </option>
                </select>
                <div className="row">
                  <input
                    name="isRequired"
                    type="checkbox"
                    placeholder="required"
                    checked={item.isRequired}
                    id={`form-dt-require-check-${index}`}
                  />
                  <label htmlFor={`form-dt-require-check-${index}`}>
                    Required
                  </label>
                </div>

                <input
                  name="example"
                  placeholder="Chú thích"
                  className="rq-form-data__item__field"
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
};

export default ResponseBox;
