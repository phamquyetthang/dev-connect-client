import React, { FunctionComponent, useState } from "react";
import ReactSwitch from "react-switch";
import { InputNormal } from "src/components/Base/Input";
import Modal from "src/components/Base/Modal";
import { TextAreaNomal } from "src/components/Base/TextArea";
import { ITodoItem } from "src/services/todo/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateTodoItem } from "src/services/todo/api";
import { EditModalWrapper } from "./style";
interface IProps {
  isShow: boolean;
  onClose: () => void;
  data: ITodoItem;
}
export const EditItemModal: FunctionComponent<IProps> = ({
  isShow,
  onClose,
  data,
}) => {
  const [item, setItem] = useState(data);
  const [startDate, setStartDate] = useState<Date | null>(
    new Date(item?.updatedAt)
  );
    console.log(item);
  const editTodoItem = async () => {
    try {
      const res = await updateTodoItem(item);
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <Modal
      isShow={isShow}
      title="Edit todo"
      closeBtn="close"
      onClose={onClose}
      submitBtn="Edit"
      onSubmit={() => editTodoItem()}
    >
      <EditModalWrapper>
        <div>
          <InputNormal
            value={item?.title}
            className="input"
            title="Title todo"
            onChange={(e) =>
              setItem({
                ...item,
                title: e.target.value,
              })
            }
          />
          <TextAreaNomal
            value={item?.description}
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
              checked={item?.status}
            />
          </div>
          <div className="datePicker">
            <span>Thời hạn</span>
            <div className="inputPicker">
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
      </EditModalWrapper>
    </Modal>
  );
};
