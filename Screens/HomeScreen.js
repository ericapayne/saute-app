import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List } from 'react-native-paper';
import data from "../constants/data";
import RecommendCard from "../components/RecCard";


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      primary: '#ffffff',
    },
  };

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = value => setSearchQuery(value);

    function renderRecommended() {
        return (
          <View style={{marginTop: 20}}>
            <Text style={{
              fontSize: 20,
              alignItems: 'center',
              marginTop: 20,
              marginHorizontal: 24,
              }}>Recommended Recipes</Text>
            <FlatList
              data={data.recommendedRecipes}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item)=> `${item.id}`}
              renderItem = {({item, index}) => {
              return (
              
                // <Text>{item.name}</Text>
                <RecommendCard 
                  key = {index}
                  recipeItem={item}
                  containerStyle={{
                    marginLeft: index === 0 ? 24 : 0,
                  }}
                  onPress={() => {}}
                />         
              );
            }}
            />
          </View>
        );
      }
      function renderCategories() {
        return (
          <View style={{marginTop: 20}}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 100,
              marginHorizontal: 24,
            }}>
            <Text style={{flex: 1,}}>Categories</Text>
            <TouchableOpacity>
              <Text style={{color: '#000000'}}>View All</Text>
            </TouchableOpacity>
            </View>
          </View>
        )
      }
  
    return (   
        <SafeAreaView style={{ flex: 1 }}>
          <PaperProvider theme={theme}>       
            <Appbar.Header>
              {/* <Appbar.Action icon="menu" onPress={() =>{}}/> */}
              <Appbar.Content title="Saute" alignItems="center"  />
            </Appbar.Header>
            <View style={styles.scrollView}>
              <Text style= {styles.headerText}>Welcome</Text>
              <Searchbar placeholder="Search for recipes" onChangeText={onChangeSearch} value={searchQuery} style={{borderRadius: 10, maxWidth: 350, alignSelf: "center"}}/>
              {renderRecommended()}
              {renderCategories()}
  
            </View>
            
          </PaperProvider>
        </SafeAreaView>
        
      
    )
  };

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      backgroundColor: '#fff',
      marginBottom: 20
    },
    headerText: {
      fontSize: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
    }
  });