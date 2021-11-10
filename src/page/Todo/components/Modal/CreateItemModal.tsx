import React, { FunctionComponent, useState } from "react";
import ReactSwitch from "react-switch";
import { InputNormal } from "src/components/Base/Input";
import Modal from "src/components/Base/Modal";
import { TextAreaNomal } from "src/components/Base/TextArea";
import { ITodoItem } from "src/services/todo/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createTodoItem } from "src/services/todo/api";
import { CreateModalWrapper } from "./style";
import { addSnackBar } from "src/services/app";
import { useAppDispatch } from "src/hooks/useAppDispatch";
interface IProps {
  isShow: boolean;
  onClose: () => void;
}
export const CreateItemModal: FunctionComponent<IProps> = ({
  isShow,
  onClose,
}) => {
  const [item, setItem] = useState({
    status: false,
    _id: "",
    user_id: "",
    number: 0,
    title: "",
    description: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const dispatch = useAppDispatch();
  const addTodoItem = async () => {
    try {
      const res = await createTodoItem(item);
      dispatch(
        addSnackBar({
          type: "success",
          message: "success",
        })
      );
    } catch (error) {
      window.location.reload();
    } finally {
      window.location.reload();
    }
  };

  return (
    <Modal
      isShow={isShow}
      title="Create todo"
      closeBtn="close"
      onClose={onClose}
      submitBtn="Create"
      onSubmit={() => addTodoItem()}
    >
      <CreateModalWrapper>
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
      </CreateModalWrapper>
    </Modal>
  );
};
