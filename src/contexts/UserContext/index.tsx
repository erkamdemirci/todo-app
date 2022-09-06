import React from 'react';
import { createContext, useContext } from 'react';

import { TodoItem } from '../../hooks/useUser';
import { useUser } from '../../hooks/useUser';

type userContextType = {
  user: string;
  todo: TodoItem[];
  isLoading: boolean;
  saveUser: (username: string) => void;
  logoutUser: () => void;
  addTodo: (content: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, isCompleted: boolean, content: string) => void;
};

const userContextDefaults: userContextType = {
  user: '',
  todo: [],
  isLoading: false,
  saveUser: () => {},
  logoutUser: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {}
};

const UserContext = createContext<userContextType>(userContextDefaults);

interface Props {
  children: React.ReactNode;
}

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: Props) {
  const user = useUser();

  return (
    <>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </>
  );
}
export default UserProvider;
