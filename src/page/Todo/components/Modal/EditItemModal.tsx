import React, { FunctionComponent, useState } from 'react';
import ReactSwitch from 'react-switch';
import { InputNormal } from 'src/components/Base/Input';
import Modal from 'src/components/Base/Modal';
import { TextAreaNormal } from 'src/components/Base/TextArea';
import { IEditTodoReq, ITodoItem } from 'src/services/todo/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { EditModalWrapper } from './style';
interface IProps {
  isShow: boolean;
  onClose: () => void;
  data: ITodoItem;
  onEditSubmit: (data: IEditTodoReq) => void;
}
export const EditItemModal: FunctionComponent<IProps> = ({
  isShow,
  onClose,
  data,
  onEditSubmit,
}) => {
  const [item, setItem] = useState<IEditTodoReq>({
    id: data._id,
    description: data?.description,
    title: data.title,
    deadline: data?.deadline,
    status: data.status,
  });

  return (
    <Modal
      isShow={isShow}
      title="Edit todo"
      closeBtn="close"
      onClose={onClose}
      submitBtn="Edit"
      onSubmit={() => onEditSubmit(item)}
    >
      <EditModalWrapper>
        <div>
          <InputNormal
            value={item.title || ''}
            className="input"
            title="Title todo"
            onChange={(e) =>
              setItem({
                ...item,
                title: e.target.value,
              })
            }
          />
          <TextAreaNormal
            value={item.description || ''}
            title="description todo"
            className="input"
            onChange={(e) =>
              setItem({
                ...item,
                description: e.target.value,
              })
            }
          />
          <div className="datePicker">
            <span>Trạng thái</span>
            <ReactSwitch
              title="status"
              onChange={(checked) =>
                setItem({
                  ...item,
                  status: checked,
                })
              }
              height={20}
              width={40}
              checked={item?.status || false}
            />
          </div>
          <div className="datePicker">
            <span>Thời hạn</span>
            <div className="inputPicker">
              <DatePicker
                selected={item.deadline}
                onChange={(date: Date) => setItem({ ...item, deadline: date })}
              />
            </div>
          </div>
        </div>
      </EditModalWrapper>
    </Modal>
  );
};
