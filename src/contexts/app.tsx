import React, {useEffect, useReducer} from 'react';
import {createContext, FC, useContext} from 'react';
import {useRequest} from '../hooks/useRequest';
import {storage} from '../services/storage';
import {BaseResponseType} from '../types/request';

const INITIAL_STATE = {
  logged: false,
  key: '',
};

type ContextType = {
  state: typeof INITIAL_STATE;
  actions: {
    setLogged: (l: boolean) => void;
    login: (k: string) => Promise<BaseResponseType>;
  };
};
const Context = createContext({...INITIAL_STATE} as unknown as ContextType);

export const AppContextProvider: FC = ({children}) => {
  const {post} = useRequest();
  const [state, setState] = useReducer(
    (prev: ContextType['state'], next: Partial<ContextType['state']>) => ({
      ...prev,
      ...next,
    }),
    INITIAL_STATE,
  );

  useEffect(() => {
    storage.getKey().then(key => {
      if (!!key) {
        setState({logged: true, key});
      }
    });
  }, []);

  const login = (key: string) => {
    return post('/login', {
      key,
    }).then(async response => {
      if (response.success) {
        await storage.setKey(key);
        setState({key, logged: true});
        return response;
      }
      return response;
    });
  };

  return (
    <Context.Provider
      value={{
        state,
        actions: {
          setLogged: logged => {
            setState({logged});
          },
          login,
        },
      }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
