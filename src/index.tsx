import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useAppContext} from './contexts/app';
import {App} from './pages/app';
import {Login} from './pages/login';

export const Main = () => {
  const ctx = useAppContext();
  return (
    <SafeAreaView style={{backgroundColor: '#6a0ce4', flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#6a0ce4" />
      {ctx.state.logged ? <App /> : <Login />}
    </SafeAreaView>
  );
};
