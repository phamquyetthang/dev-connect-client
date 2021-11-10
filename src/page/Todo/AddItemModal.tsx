import React, { FunctionComponent, useState } from "react";
import ReactSwitch from "react-switch";
import { InputNormal } from "src/components/Base/Input";
import Modal from "src/components/Base/Modal";
import { ITodoItem } from "src/services/todo/types";
import { EditModalWrapper } from "./style";

interface IProps {
  isShow: boolean;
  onClose: () => void;
  data: ITodoItem;
}
export const AddItemModal: FunctionComponent<IProps> = ({
  isShow,
  onClose,
  data,
}) => {
  const [item, setItem] = useState(data);
  return (
    <Modal
      isShow={isShow}
      title="Add todo"
      closeBtn="close"
      onClose={onClose}
      submitBtn="Edit"
      onSubmit={() => null}
    >
      <EditModalWrapper>
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
        <InputNormal
          value={item?.description}
          title="description todo"
          className="input"
          onChange={(e) =>
            setItem({
              ...item,
              title: e.target.value,
            })
          }
        />
        <ReactSwitch
          title="status"
          onChange={(checked) =>
            setItem({
              ...item,
              status: checked,
            })
          }
          checked={item?.status}
        />
      </EditModalWrapper>
    </Modal>
  );
};
