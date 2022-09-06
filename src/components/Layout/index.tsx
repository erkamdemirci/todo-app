import * as S from './styles';
import { motion } from 'framer-motion';

import TodoListCard from '../Todo/TodoList';
import Welcome from '../Welcome';
import { useUserContext } from '../../contexts/UserContext';

const Layout = () => {
  const { user } = useUserContext();
  return (
    <S.Container as={motion.div} transition={{ type: 'tween' }} className="shadow-lg  w-screen md:w-[550px] ">
      {user ? <TodoListCard /> : <Welcome />}
    </S.Container>
  );
};

export default Layout;
