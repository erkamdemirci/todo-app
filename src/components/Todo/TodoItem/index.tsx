import * as S from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUserContext } from '../../../contexts/UserContext';

import DeleteIcon from '../../../assets/icons/delete-icon';
import EditIcon from '../../../assets/icons/edit-icon';
import SaveIcon from '../../../assets/icons/save-icon';
import CloseIcon from '../../../assets/icons/close-icon';
import LoadingSpinner from '../../../assets/icons/loading-spinner';

interface TodoItem {
  content: string;
  isCompleted: boolean;
  id: string;
}

interface Props {
  todoItem: TodoItem;
}

const schema = yup
  .object({
    content: yup.string().required().matches(/\w{3}/)
  })
  .required();

const TodoListCard = ({ todoItem }: Props) => {
  const { deleteTodo, updateTodo } = useUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(todoItem.isCompleted);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const watchContent: string = watch('content') ?? todoItem.content;

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    if (data.content !== todoItem.content) await updateTodo(todoItem.id, false, data.content);
    setIsEditing(false);
    setIsLoading(false);
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const dismissHandler = () => {
    setIsEditing(false);
    setValue('content', todoItem.content);
  };

  const deleteHandler = async () => {
    setIsLoading(true);
    await deleteTodo(todoItem.id);
    setIsLoading(false);
  };

  const checkboxChangeHandler = (e: any) => {
    setIsChecked(!isChecked);
    setIsEditing(false);
    updateTodo(todoItem.id, e.target.checked, todoItem.content);
  };

  if (isLoading)
    return (
      <S.Loading>
        <LoadingSpinner classes={'spinner h-5 w-5'} />
      </S.Loading>
    );

  return (
    <S.Container>
      <S.Checkbox>
        <input className="checkbox-flip" type="checkbox" onChange={checkboxChangeHandler} checked={isChecked} id={`_checkbox${todoItem.id}`} />
        <label htmlFor={`_checkbox${todoItem.id}`}>
          <span></span>
        </label>
      </S.Checkbox>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        {isEditing ? (
          <>
            <input
              {...register('content')}
              type="text"
              onChange={(e) => setValue('content', e.target.value)}
              autoFocus={true}
              value={watchContent}
              autoComplete="off"
            />
            {errors['content']?.type === 'required' ? (
              <S.ErrorText>Hata: Bu içerik gerekli!</S.ErrorText>
            ) : (
              errors['content']?.type === 'matches' && <S.ErrorText>Hata: İçerik 3 harften uzun olmalı.</S.ErrorText>
            )}
          </>
        ) : (
          <span className={`${isChecked && 'line-through italic opacity-20'} text-lg`}>{todoItem.content}</span>
        )}
      </S.Content>

      <S.Actions>
        {!isChecked &&
          (isEditing ? (
            <button type="button" onClick={handleSubmit(onSubmit)}>
              <SaveIcon classes={'h-6 w-6'} />
            </button>
          ) : (
            <button type="button" onClick={editHandler}>
              <EditIcon classes={'h-6 w-6'} />
            </button>
          ))}
        {isEditing ? (
          <button type="button" onClick={dismissHandler}>
            <CloseIcon classes={'h-6 w-6'} />
          </button>
        ) : (
          <button type="button" onClick={deleteHandler}>
            <DeleteIcon classes={'h-6 w-6'} />
          </button>
        )}
      </S.Actions>
    </S.Container>
  );
};

export default TodoListCard;
