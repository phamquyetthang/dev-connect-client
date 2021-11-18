import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addSnackBar, createAppErr, spinLoading } from 'src/services/app';
import {
  getListTodoApi,
  switchTodoItem,
  updateTodoItem,
} from 'src/services/todo/api';
import { TodoItem } from './components/TodoItem/TodoItem';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import HeaderTool from 'src/components/Common/HeaderTool';
import { IEditTodoReq, ITodoItem } from 'src/services/todo/types';
import { TodoListWrapper } from './style';
import { EditItemModal } from './components/Modal/EditItemModal';
import { CreateItemModal } from './components/Modal/CreateItemModal';

const TodoScreen = () => {
  const dispatch = useAppDispatch();
  const [listData, setListData] = useState<Array<ITodoItem>>([]);
  const [editModalData, setEditModalData] = useState<false | ITodoItem>(false);
  const [createModalData, setCreateModalData] = useState<boolean>(false);

  const getData = useCallback(async () => {
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
  }, [dispatch]);

  const changeItemNumber = async (id: string, newNumber: number) => {
    try {
      dispatch(spinLoading(true));
      const res = await switchTodoItem(id, newNumber);
      setListData(res);
      dispatch(
        addSnackBar({
          type: 'success',
          message: 'success',
        })
      );
    } catch (error) {
      dispatch(
        addSnackBar({
          type: 'error',
          message: 'error',
        })
      );
    } finally {
      dispatch(spinLoading(false));
    }
  };

  const handleEditItem = (item: ITodoItem) => {
    setEditModalData(item);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const editTodoItem = async (item: IEditTodoReq) => {
    try {
      dispatch(spinLoading(true));
      await updateTodoItem(item);
      setEditModalData(false);
      dispatch(
        addSnackBar({
          type: 'success',
          message: 'Edit todo success',
        })
      );
      getData();
    } catch (error) {
      addSnackBar({
        type: 'error',
        message: 'Edit todo error',
      });
    } finally {
      dispatch(spinLoading(false));
    }
  };

  return (
    <TodoListWrapper>
      <HeaderTool handleAddNew={() => setCreateModalData(true)} />
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
          {(provided, _) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="todoList"
            >
              {listData.map((item: ITodoItem, index) => (
                <Draggable
                  key={item._id}
                  draggableId={String(item._id)}
                  index={index}
                >
                  {(provided, _) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem item={item} onEdit={handleEditItem} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {editModalData && (
        <EditItemModal
          isShow={!!editModalData}
          onClose={() => setEditModalData(false)}
          data={editModalData}
          onEditSubmit={editTodoItem}
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
