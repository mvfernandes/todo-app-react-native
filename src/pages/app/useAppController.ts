import {BaseResponseType} from '../../types/request';
import {TodoType} from '../../types/todo';
import {useEffect, useState} from 'react';
import {useRequest} from '../../hooks/useRequest';
import {storage} from '../../services/storage';
import {useAppContext} from '../../contexts/app';

export default function useAppController() {
  const {actions} = useAppContext();

  const {get, post, put, del} = useRequest();
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    let mounted = true;
    get('/todo').then(response => {
      if (mounted) {
        setTodos(response.body);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  async function submitAddTodo() {
    if (!!todo.trim()) {
      const response: BaseResponseType = await post('/todo', {todo});
      if (response.success) {
        setTodos(prev => [{id: response.body.id, todo, done: false}, ...prev]);
        setTodo('');
      }
    }
  }

  async function toggleDone(todo: TodoType) {
    await put('/todo', {...todo, done: !todo.done});
    setTodos(oldTasks =>
      oldTasks.map(prevTask => {
        if (prevTask.id === todo.id) {
          return {...prevTask, done: !prevTask.done};
        }
        return prevTask;
      }),
    );
  }

  async function removeTodo(todo: TodoType) {
    await del(`/todo?id=${todo.id}`);
    setTodos(oldTasks => oldTasks.filter(prevTask => prevTask.id !== todo.id));
  }

  const logout = async () => {
    storage.removeKey();
    actions.setLogged(false);
  };

  const getTodos = () => {
    get('/todo').then(response => {
      setTodos(response.body);
    });
  };

  return {
    todos,
    todo,
    setTodo,
    submitAddTodo,
    toggleDone,
    removeTodo,
    logout,
    getTodos,
  };
}
