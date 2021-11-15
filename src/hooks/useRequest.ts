import {useAppContext} from '../contexts/app';
const BASE_URL = 'https://mvfernandes-my-todos.vercel.app/api/';

export const useRequest = () => {
  const ctx = useAppContext();
  const key = ctx.state?.key;

  const req = (method: string, endpoint: string, payload?: object) => {
    const config: RequestInit = {
      method,
      headers: {
        authorization: key,
      },
      body: JSON.stringify(payload || []),
    };

    if (!key) {
      delete config.headers;
    }

    if (method === 'GET') {
      delete config.body;
    }

    if (method !== 'GET' && !!key) {
      //post method require a typeof Headers, dont askme why kkk
      config.headers = new Headers({
        authorization: key,
      });
    }

    console.log('Before', {config});

    return fetch(`${BASE_URL}${endpoint}`, config)
      .then(res => {
        if (res.status === 401) {
          ctx.actions.setLogged(false);
        }
        return res.json();
      })
      .catch(err => {
        console.log('err->', err);
      });
  };

  const get = (endpoint: string) => {
    return req('GET', endpoint);
  };

  const post = (endpoint: string, payload: object) => {
    return req('POST', endpoint, payload);
  };

  const put = (endpoint: string, payload: object) => {
    return req('PUT', endpoint, payload);
  };

  const del = (endpoint: string) => {
    return req('DELETE', endpoint);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
