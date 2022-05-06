import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      primary: '#ffffff',
    },
  };

function FavoritesScreen() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <PaperProvider theme={theme}>
        <Appbar.Header>
              {/* <Appbar.Action icon="menu" onPress={() =>{}}/> */}
              <Appbar.Content title="Saute" alignItems="center"  />
            </Appbar.Header>
          <View style={{ flex: 1}}>
        <Text style={styles.headerText}>Favorites</Text>
    </View>
    </PaperProvider>
      </SafeAreaView>
    )
  };

  export default FavoritesScreen;

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