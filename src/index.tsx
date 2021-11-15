import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{}}>
          <Text>App</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
