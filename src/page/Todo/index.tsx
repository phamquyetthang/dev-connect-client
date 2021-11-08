import { useEffect, useState } from "react";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { createAppErr } from "src/services/app";
import { getListTodoApi, switchTodoItem } from "src/services/todo/api";
import { TodoItem } from "./components/TodoItem/TodoItem";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoScreen = () => {
  const dispatch = useAppDispatch();
  const [listData, setListData] = useState<
    Array<{
      status: boolean;
      _id: string;
      user_id: string;
      number: number;
      title: string;
      description: string;
      createdAt: Date;
      updatedAt: Date;
    }>
  >([]);
  const getData = async () => {
    try {
      const data = await getListTodoApi();
      setListData(data);
    } catch (error) {
      dispatch(
        createAppErr({
          title: error as string,
        })
      );
    }
  };

  const changeItemNumber = async (id: string, newNumber: number) => {
    try {
      const res = await switchTodoItem(id, newNumber);
      setListData(res);
    } catch (error) {

    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <DragDropContext
        onDragEnd={(result, provided) => {
            // changeItemNumber(
            //   result?.draggableId,
            //   listData[Number(result?.destination?.index)]?.number
            // );
        }}
      >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {listData.map((item: any, index) => (
                <Draggable
                  key={index}
                  draggableId={String(item._id)}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoScreen;
