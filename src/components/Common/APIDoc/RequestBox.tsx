import { uniqueId } from 'lodash';
import { FunctionComponent, useCallback, useState } from 'react';
import Select from 'react-select';
import Button from 'src/components/Base/Button';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg';
import { RequestBoxWrapper } from './style';
import ReactJson from 'react-json-view';
import {
  IRequestTypeOption,
  REQUEST_TYPE,
  REQUEST_TYPE_OPTIONS,
} from 'src/lib/constants/options';
import Switch from 'react-switch';

interface IProps {
  isEdit?: boolean;
}
interface IFromData {
  name: string;
  type: string;
  isRequired: boolean;
  example: string;
}

const initFormData = {
  name: '',
  type: '',
  isRequired: true,
  example: '',
};

const RequestBox: FunctionComponent<IProps> = ({ isEdit = false }) => {
  const [formData, setFormData] = useState<IFromData[]>([initFormData]);
  const [requestType, setRequestType] = useState<REQUEST_TYPE>(
    REQUEST_TYPE.JSON
  );
  const [jsonEditor, setJsonEditor] = useState<boolean>(true);
  const [reqJson, setReqJson] = useState({});

  const addFrom = useCallback(() => {
    setFormData((pre) => {
      return [...pre, initFormData];
    });
  }, []);

  const changeRequestType = (e: IRequestTypeOption | null) => {
    !!e && setRequestType(e.value);
  };

  const removeForm = useCallback(
    (index: number) => {
      const oldForms = [...formData];
      const leftArr = oldForms.slice(0, index);
      const rightArr = oldForms.slice(index + 1);
      setFormData(leftArr.concat(index < formData.length ? rightArr : []));
    },
    [formData]
  );

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
            onChange={() => setJsonEditor(!jsonEditor)}
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
            onAdd={(e) => setReqJson(e.updated_src)}
            onDelete={(e) => setReqJson(e.updated_src)}
            onEdit={(e) => setReqJson(e.updated_src)}
            displayObjectSize={true}
            enableClipboard={true}
          />
        </div>
      ) : (
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
};

export default RequestBox;
