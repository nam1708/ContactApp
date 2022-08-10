
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>

  );
};

const styles = StyleSheet.create({
});

export default App;
