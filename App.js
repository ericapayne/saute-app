import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen'
import FavoritesScreen from "./Screens/FavoritesScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";




const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: '#ffffff',
  },
};

// const HomeScreen = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const onChangeSearch = value => setSearchQuery(value);

//   return (   
//       <SafeAreaView style={{ flex: 1 }}>
//         <PaperProvider theme={theme}>       
//           <Appbar.Header>
//             {/* <Appbar.Action icon="menu" onPress={() =>{}}/> */}
//             <Appbar.Content title="Saute" alignItems="center"  />
//           </Appbar.Header>
//           <View style={styles.scrollView}>
//             <Text style= {styles.headerText}>Welcome</Text>
//             <Searchbar placeholder="Search for recipes" onChangeText={onChangeSearch} value={searchQuery} style={{borderRadius: 10, maxWidth: 350, alignSelf: "center"}}/>
//             <Text style={styles.headerText}>Recommended</Text>

//           </View>
          
//         </PaperProvider>
//       </SafeAreaView>
      
    
//   )
// };

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

// function FavoritesScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1}}>
//       <PaperProvider theme={theme}>
//       <Appbar.Header>
//             {/* <Appbar.Action icon="menu" onPress={() =>{}}/> */}
//             <Appbar.Content title="Saute" alignItems="center"  />
//           </Appbar.Header>
//         <View style={{ flex: 1}}>
//       <Text style={styles.headerText}>Favorites</Text>
//   </View>
//   </PaperProvider>
//     </SafeAreaView>
//   )
// }

// function ProfileScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1}}>
//       <PaperProvider theme={theme}>
//       <Appbar.Header>
//             {/* <Appbar.Action icon="menu" onPress={() =>{}}/> */}
//             <Appbar.Content title="Saute" alignItems="center"  />
//           </Appbar.Header>
//         <View style={{ flex: 1}}>
//       <Text style={styles.headerText}>Profile</Text>
//   </View>
//   </PaperProvider>
//     </SafeAreaView>
//   )
// }

// function SettingsScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1}}>
//       <PaperProvider theme={theme}>
//       <Appbar.Header>
//             {/* <Appbar.Action icon="menu" onPress={() =>{}}/> */}
//             <Appbar.Content title="Saute" alignItems="center"  />
//           </Appbar.Header>
//         <View style={{ flex: 1}}>
//       <List.Section>
//     <List.Subheader style={styles.headerText}>Settings</List.Subheader>
//     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
//     <List.Item
//       title="Second Item"
//       left={() => <List.Icon color="#000" icon="folder" />}
//     />
//   </List.Section>
//   </View>
//   </PaperProvider>
//     </SafeAreaView>
//   )
// }

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
      barStyle={{ backgroundColor: '#ffffff' }}
      labeled= {false}>
        <Tab.Screen name="Home" component={HomeScreen} options= {{tabBarIcon: () => (
            <Ionicons name="home" size={24} color="black" />
        ),}}/>
        {/* <Tab.Screen name="Search" component={SearchScreen} options= {{tabBarIcon: () => (
            <Ionicons name="search" size={24} color="black" />
        ),}}/> */}
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
