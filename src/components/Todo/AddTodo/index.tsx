import * as S from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useUserContext } from '../../../contexts/UserContext';
import SaveIcon from '../../../assets/icons/save-icon';
import CloseIcon from '../../../assets/icons/close-icon';
import LoadingSpinner from '../../../assets/icons/loading-spinner';

const schema = yup
  .object({
    content: yup.string().required().matches(/\w{3}/)
  })
  .required();

interface Props {
  setIsAdding: any;
}

const AddTodo = ({ setIsAdding }: Props) => {
  const { addTodo } = useUserContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await addTodo(data.content);
    setIsAdding(false);
    setIsLoading(false);
  };

  const dismissHandler = () => {
    setIsAdding(false);
  };

  if (isLoading)
    return (
      <S.Loading>
        <LoadingSpinner classes={'spinner'} />
        <span>Yükleniyor..</span>
      </S.Loading>
    );

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.FormInput>
        <span>Yeni Kayıt</span>
        <input {...register('content')} type="text" autoComplete="off" onChange={(e) => setValue('content', e.target.value)} autoFocus={true} />
        {errors['content']?.type === 'required' ? (
          <S.ErrorText>Hata: Bu içerik gerekli!</S.ErrorText>
        ) : (
          errors['content']?.type === 'matches' && <S.ErrorText>Hata: İçerik 3 harften uzun olmalı.</S.ErrorText>
        )}
      </S.FormInput>
      <S.Actions>
        <button type="submit">
          <SaveIcon classes={'h-8 w-8'} />
        </button>
        <button type="button" onClick={dismissHandler}>
          <CloseIcon classes={'h-8 w-8'} />
        </button>
      </S.Actions>
    </S.FormContainer>
  );
};

export default AddTodo;
