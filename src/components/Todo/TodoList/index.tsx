import * as S from './styles';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useUserContext } from '../../../contexts/UserContext';
import TodoItem from '../TodoItem';
import AddTodo from '../AddTodo';
import AddIcon from '../../../assets/icons/add-icon';
import LogoutIcon from '../../../assets/icons/logout-icon';

const TodoListCard = () => {
  const { isLoading, todo, user, logoutUser } = useUserContext();
  const [isAdding, setIsAdding] = useState(false);

  const addNewButtonHandler = () => {
    setIsAdding(true);
  };

  return (
    <>
      {isLoading ? (
        <S.Loading>Yükleniyor..</S.Loading>
      ) : (
        <>
          <S.Heading>
            {isAdding ? (
              <AddTodo setIsAdding={setIsAdding} />
            ) : (
              <>
                <span className="flex flex-col">
                  Hoşgeldin
                  <div className="flex flex-row gap-2">
                    <b className="font-bold">{user}</b>
                    <button type="button" onClick={logoutUser}>
                      <LogoutIcon classes={'h-6 w-6'} />
                    </button>
                  </div>
                </span>

                <button type="button" onClick={addNewButtonHandler}>
                  <AddIcon classes={'h-10 w-10'} />
                </button>
              </>
            )}
          </S.Heading>
          {!isAdding && todo.length ? (
            <S.TodoList>
              <AnimatePresence mode={'popLayout'}>
                {todo
                  ? todo.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        // initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'tween' }}
                      >
                        <TodoItem todoItem={item} />
                      </motion.div>
                    ))
                  : null}
              </AnimatePresence>
            </S.TodoList>
          ) : (
            !isAdding && <S.EmptyList>henüz kayıt eklemediniz!</S.EmptyList>
          )}
        </>
      )}
    </>
  );
};

export default TodoListCard;
