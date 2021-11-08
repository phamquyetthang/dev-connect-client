import React, { FunctionComponent } from "react";
import Box from "src/components/Base/Box";
import { TodoItemWrapper } from "./style";
import { ReactComponent as StatusIcon } from 'src/assets/icons/statusIcon.svg';
import { ReactComponent as UncheckIcon } from 'src/assets/icons/unCheckIcon.svg';
import moment from "moment";

interface IProps {
  item: any;
}

export const TodoItem: FunctionComponent<IProps> = ({ item }) => {
  return (
    <TodoItemWrapper>
      <Box className="item">
        {item.status ? <StatusIcon/> : <UncheckIcon style={{fill:"yellow"}}/>}
        <span>{item.title}</span>
        <span>{item.description}</span>
        <span>{moment(item.createdAt).format('DD-MM-YYYY')}</span>
        <span>{moment(item.updatedAt).format('DD-MM-YYYY')}</span>
      </Box>
    </TodoItemWrapper>
  );
};
