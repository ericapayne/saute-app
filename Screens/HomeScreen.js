import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List } from 'react-native-paper';
import data from "../constants/data";
import RecommendCard from "../components/RecCard";
import images from "../constants/images"
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import ProfileScreen from "./ProfileScreen";
import RecipeScreen from "./RecipeScreen";


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      primary: '#ffffff',
    },
  };



const HomeScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = value => setSearchQuery(value);

    const [recipeIndex, setRecipeIndex] = useState('');

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
                  onPress={() => navigation.navigate("Recipe", {recipe: item})}
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
              marginBottom: 20,
              marginHorizontal: 24,
            }}>
            <Text style={{flex: 1, fontSize: 30}}>Categories</Text>
            <TouchableOpacity>
              <Text style={{color: '#000000'}}>View All</Text>
            </TouchableOpacity>
            
            </View>
            
            <View style={{flex: 1,flexDirection: "row",justifyContent: 'center'}}>
            <View style={styles.categoryCard}>
                
                
               <Text style={styles.categoryCardText}>Sandwich</Text>
               
               
            </View>
            <View style={styles.categoryCard2}>
               <Text style={styles.categoryCardText}>Pasta</Text>
            </View>
            </View>
            <View style={{flexDirection: "row",justifyContent: 'center'}}>
            <View style={styles.categoryCard4}>
               <Text style={styles.categoryCardText}>Family</Text>
            </View>
            <View style={styles.categoryCard3}>
               <Text style={styles.categoryCardText}>Easy</Text>
            </View>
            </View>
          </View>
        )
      }
  
    return (   
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar backgroundColor="#fff"/>
            <ScrollView>
          <PaperProvider theme={theme}>       
            {/* <Appbar.Header>
              
              <Appbar.Content title="Saute" alignItems="center"  />
            </Appbar.Header> */}
            <View style={styles.scrollView}>
              <Text style= {styles.headerText}>Welcome</Text>
              <Searchbar placeholder="Search for recipes" onChangeText={onChangeSearch} value={searchQuery} style={{borderRadius: 10, maxWidth: 350, alignSelf: "center"}}/>
              {renderRecommended()}
              {renderCategories()}
  
            </View>
            
          </PaperProvider>
          </ScrollView>
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
    },
    categoryCard: {
        width: 170,
        height: 170,
        backgroundColor: "#6eb5ff",
        padding: 20,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    categoryCard2: {
        width: 170,
        height: 170,
        backgroundColor: "#ffc9de",
        padding: 20,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    categoryCard3: {
        width: 170,
        height: 170,
        backgroundColor: "#a79aff",
        padding: 20,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    categoryCard4: {
        width: 170,
        height: 170,
        backgroundColor: "#ffabab",
        padding: 20,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        
    },
    categoryCardText: {
        textAlign: 'center', 
        color: "#fff", 
        fontSize: 22,
        fontWeight: 'bold'
    },

  });