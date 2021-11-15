/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Main} from './src';
import {name as appName} from './app.json';
import {AppContextProvider} from './src/contexts/app';

const Application = () => (
  <AppContextProvider>
    <Main />
  </AppContextProvider>
);

AppRegistry.registerComponent(appName, () => Application);
