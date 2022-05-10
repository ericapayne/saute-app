import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen'
import FavoritesScreen from "./Screens/FavoritesScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { MainStackNavigator } from "./Navigation/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeScreen from "./Screens/RecipeScreen";
import 'react-native-gesture-handler';


// made a custom theme for the thing
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: '#ffffff',
  },
};



const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = value => setSearchQuery(value);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <PaperProvider theme={theme}>
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() =>{}}/>
          <Appbar.Content title="Saute" alignItems="center" paddingRight={70} />
        </Appbar.Header>

        <Searchbar placeholder="Search for recipes" onChangeText={onChangeSearch} value={searchQuery}/>

      </PaperProvider>
    </SafeAreaView>
  )
}

function HomeTab() {
  return (
    
    <Tab.Navigator
      barStyle={{ backgroundColor: '#ffffff' }}
      labeled= {false}>
        <Tab.Screen name="Home" component={HomeScreen} options= {{tabBarIcon: () => (
            <Ionicons name="home" size={24} color="black" />
        ),}}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen} options= {{tabBarIcon: () => (
            <Ionicons name="bookmark" size={24} color="black" />
        ),}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options= {{tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
        ),}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options= {{tabBarIcon: () => (
            <Ionicons name="settings-outline" size={24} color="black" />
        ),}}/>
      </Tab.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      {/* <Tab.Navigator
      barStyle={{ backgroundColor: '#ffffff' }}
      labeled= {false}>
        <Tab.Screen name="Home" component={HomeScreen} options= {{tabBarIcon: () => (
            <Ionicons name="home" size={24} color="black" />
        ),}}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen} options= {{tabBarIcon: () => (
            <Ionicons name="bookmark" size={24} color="black" />
        ),}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options= {{tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
        ),}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options= {{tabBarIcon: () => (
            <Ionicons name="settings-outline" size={24} color="black" />
        ),}}/>
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name = "Saute" component={HomeTab}/>
        <Stack.Screen name = "Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginBottom: 20
  },
  headerText: {
    fontSize: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});
