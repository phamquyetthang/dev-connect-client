import { useCallback, useState } from 'react';
import Select from 'react-select';
import { uniqueId } from 'lodash';
import {
  IResponseTypeOption,
  RESPONSE_TYPE_OPTIONS,
} from 'src/lib/constants/options';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg';
import { RequestBoxWrapper } from './style';
import ReactJson from 'react-json-view';
import Button from 'src/components/Base/Button';

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

const ResponseBox = () => {
  const [typeDisplay, setTypeDisplay] = useState<IResponseTypeOption>(
    RESPONSE_TYPE_OPTIONS[1]
  );
  const [formData, setFormData] = useState<IFromData[]>([initFormData]);

  const [req, setReq] = useState({});

  const changeTypeDisplay = (e: IResponseTypeOption | null) => {
    e && setTypeDisplay(e);
  };

  const addFrom = useCallback(() => {
    setFormData((pre) => {
      return [...pre, initFormData];
    });
  }, []);

  const removeForm = useCallback(
    (index: number) => {
      const oldForms = [...formData];
      const leftArr = oldForms.slice(0, index);
      const rightArr = oldForms.slice(index + 1);
      setFormData(leftArr.concat(index < formData.length ? rightArr : []));
    },
    [formData]
  );

  const renderForm = () => {
    switch (typeDisplay?.value) {
      case 'json':
        return (
          <div className="json-edit">
            <ReactJson
              style={{ padding: 16 }}
              src={req}
              theme="monokai"
              onAdd={(e) => setReq(e.updated_src)}
              onDelete={(e) => setReq(e.updated_src)}
              onEdit={(e) => setReq(e.updated_src)}
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
                  onClick={addFrom}
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
          defaultValue={typeDisplay}
        />
      </div>
      {renderForm()}
    </RequestBoxWrapper>
  );
};

export default ResponseBox;
