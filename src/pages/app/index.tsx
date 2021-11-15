import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Footer,
  Container,
  Header,
  Title,
  TodoRow,
  TodoTitle,
  Input,
  ButtonSend,
  ButtonLogout,
} from './styles';
import useAppController from './useAppController';

export const App = () => {
  const {
    todo,
    todos,
    setTodo,
    submitAddTodo,
    toggleDone,
    removeTodo,
    logout,
    getTodos,
  } = useAppController();
  return (
    <>
      <Header>
        <ButtonLogout onPress={getTodos}>
          <MaterialCommunityIcons name="reload" size={20} color="#fff" />
        </ButtonLogout>
        <Title>Todo App</Title>
        <ButtonLogout onPress={logout}>
          <MaterialCommunityIcons name="logout" size={20} color="#fff" />
        </ButtonLogout>
      </Header>
      <Container>
        <FlatList
          data={todos}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TodoRow>
              <TouchableOpacity onPress={() => toggleDone(item)}>
                <MaterialCommunityIcons
                  name={
                    item.done ? 'check-box-outline' : 'checkbox-blank-outline'
                  }
                  size={24}
                  color={item.done ? '#6a0ce4' : '#333'}
                />
              </TouchableOpacity>
              <TodoTitle done={!!item.done}>{item.todo}</TodoTitle>
              <TouchableOpacity onPress={() => removeTodo(item)}>
                <FontAwesome name="trash" size={24} color="#c10000" />
              </TouchableOpacity>
            </TodoRow>
          )}
        />
      </Container>
      <Footer>
        <Input
          placeholder="Qual a próxima tarefa?"
          value={todo}
          onChangeText={setTodo}
        />
        <ButtonSend onPress={submitAddTodo}>
          <MaterialCommunityIcons name="send" size={24} color="#fff" />
        </ButtonSend>
      </Footer>
    </>
  );
};
