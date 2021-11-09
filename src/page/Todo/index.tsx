import { useEffect, useState } from "react";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { addSnackBar, createAppErr, spinLoading } from "src/services/app";
import { getListTodoApi, switchTodoItem } from "src/services/todo/api";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import HeaderTool from 'src/components/Common/HeaderTool';


const TodoScreen = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      dispatch(spinLoading(true));
      const res = await switchTodoItem(id, newNumber);
      setListData(res);
      dispatch(
        addSnackBar({
          type: "success",
          message: "success",
        })
      );
    } catch (error) {
      dispatch(
        addSnackBar({
          type: "error",
          message: "error",
        })
      );
    } finally {
      setLoading(false);
      dispatch(spinLoading(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return loading ? (
    <div>

      {listData.map((item: any, index) => (
        <TodoItem item={item} />
      ))}
    </div>
  ) : (
    <div>
      <DragDropContext
        onDragEnd={(result, provided) => {
          if (result?.destination?.index !== result.source.index) {
            changeItemNumber(
              result?.draggableId,
              listData[Number(result?.destination?.index)]?.number
            );
          }
        }}
      >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <HeaderTool handleAddNew={() => null}  />
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
