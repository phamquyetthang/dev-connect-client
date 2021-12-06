import { useEffect, useState } from "react";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { addSnackBar, createAppErr, spinLoading } from "src/services/app";
import {
  deleteItem,
  getListTodoApi,
  switchTodoItem,
} from "src/services/todo/api";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import HeaderTool from "src/components/Common/HeaderTool";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useAppTheme from "src/hooks/useAppTheme";
import { ITodoItem } from "src/services/todo/types";
import { TodoListWrapper } from "./style";
import { EditItemModal } from "./components/Modal/EditItemModal";
import { CreateItemModal } from "./components/Modal/CreateItemModal";

const TodoScreen = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState<Array<ITodoItem>>([]);
  const theme = useAppTheme();
  const [editModalData, setEditModalData] = useState<false | ITodoItem>(false);
  const [createModalData, setCreateModalData] = useState<boolean>(false);

  const getData = async (searchKey?: string) => {
    try {
      setLoading(true);
      const data = await getListTodoApi(searchKey);
      setListData(data);
    } catch (error) {
      dispatch(
        createAppErr({
          title: error as string,
        })
      );
    } finally {
      setLoading(false);
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

  const handleEditItem = (item: ITodoItem) => {
    setEditModalData(item);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteTodoItem = async (id: string) => {
    try {
      await deleteItem(id);
      getData();
      dispatch(
        addSnackBar({
          type: "success",
          message: "delete success",
        })
      );
    } catch (error) {}
  };

  return (
    <TodoListWrapper>
      <HeaderTool
        handleAddNew={() => setCreateModalData(true)}
        onSearch={getData}
      />
      {loading ? (
        <SkeletonTheme
          baseColor={theme["background2"]}
          highlightColor={theme["background1"]}
        >
          <Skeleton count={listData.length} height={60} className="mt1" />
        </SkeletonTheme>
      ) : (
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
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="todoList"
              >
                {listData.map((item: ITodoItem, index) => (
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
                        <TodoItem
                          item={item}
                          onEdit={handleEditItem}
                          deleteTodoItem={deleteTodoItem}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      {editModalData && (
        <EditItemModal
          isShow={!!editModalData}
          onClose={() => setEditModalData(false)}
          data={editModalData}
        />
      )}
      <CreateItemModal
        isShow={createModalData}
        onClose={() => setCreateModalData(false)}
      />
    </TodoListWrapper>
  );
};

export default TodoScreen;
