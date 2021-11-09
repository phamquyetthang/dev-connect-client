import React, { FunctionComponent, useState } from "react";
import Box from "src/components/Base/Box";
import { TodoItemWrapper } from "./style";
import { ReactComponent as StatusIcon } from "src/assets/icons/statusIcon.svg";
import { ReactComponent as UncheckIcon } from "src/assets/icons/unCheckIcon.svg";
import { ReactComponent as EditIcon } from "src/assets/icons/edit.svg";
import { ReactComponent as TrashIcon } from "src/assets/icons/trash.svg";

import { formatTimeMess } from "./../../../../lib/helpers/index";
import { updateStatusItem } from "./../../../../services/todo/api";

interface IProps {
  item: any;
}

export const TodoItem: FunctionComponent<IProps> = ({ item }) => {
  const [todoItem, setTodoItem] = useState(item);
  const changeStatus = (status: boolean) => {
    setTodoItem({
      ...todoItem,
      status,
    });
    updateStatusItem(todoItem._id, status)
      .then((result) => {})
      .catch(() => setTodoItem(item));
  };
  return (
    <TodoItemWrapper>
      <Box className={`item ${todoItem.status && " success"}`}>
        {todoItem.status ? (
          <StatusIcon onClick={() => changeStatus(false)} />
        ) : (
          <UncheckIcon
            onClick={() => changeStatus(true)}
            style={{ fill: "yellow" }}
          />
        )}
        <span>{todoItem.title}</span>
        <span>{todoItem.description}</span>
        <span>{formatTimeMess(todoItem.createdAt)}</span>
        <span>{formatTimeMess(todoItem.updatedAt)}</span>
        <div className="editView">
          <EditIcon className="editStyle" />
          <TrashIcon />
        </div>
      </Box>
    </TodoItemWrapper>
  );
};
