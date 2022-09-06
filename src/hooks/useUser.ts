import axios from 'axios';
import { useEffect, useState } from 'react';

export interface TodoItem {
  content: string;
  isCompleted: boolean;
  id: string;
}

export const useUser = () => {
  const [user, setUser] = useState('');
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const saveUser = async (username: string) => {
    window.localStorage.setItem('user', username);
    setUser(username);
    setIsLoading(true);
    axios
      .get('https://6313ca86fc9dc45cb4e63f33.mockapi.io/todos')
      .then((res) => {
        setTodo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const logoutUser = () => {
    window.localStorage.removeItem('user');
    setUser('');
    setIsLoading(true);
  };

  const addTodo = async (content: string) => {
    let res = await axios.post('https://6313ca86fc9dc45cb4e63f33.mockapi.io/todos', { content });
    let todoItem: TodoItem = res.data;
    let todoList: TodoItem[] = [...todo, todoItem];
    setTodo(todoList);
  };

  const updateTodo = async (id: any, isCompleted: boolean, content: string) => {
    await axios.put(`https://6313ca86fc9dc45cb4e63f33.mockapi.io/todos/${id}`, { id, isCompleted, content });
    const todoList = todo?.map((item: TodoItem) => {
      if (item.id === id) return { ...item, content, isCompleted };
      return item;
    });
    setTodo(todoList);
  };

  const deleteTodo = async (id: any) => {
    await axios.delete(`https://6313ca86fc9dc45cb4e63f33.mockapi.io/todos/${id}`);
    const todoList = todo?.filter((item: TodoItem) => item.id !== id);
    setTodo(todoList);
  };

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) {
      setUser(user);

      setIsLoading(true);
      axios
        .get('https://6313ca86fc9dc45cb4e63f33.mockapi.io/todos')
        .then((res) => {
          setTodo(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, []);

  return { user, todo, isLoading, addTodo, saveUser, logoutUser, deleteTodo, updateTodo };
};

export default useUser;
