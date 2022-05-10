import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView, Image, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List } from 'react-native-paper';
import data from "../constants/data";
import RecommendCard from "../components/RecCard";
import { Picker } from "@react-native-picker/picker";

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      primary: '#ffffff',
    },
  };

  const ProfileScreen = () => {
    const [selectedValue, setSelectedValue] = useState("Master Chef");

    function renderRecommended() {
      return (
        <View style={{marginTop: 20}}>
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
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
        <ScrollView>
        <PaperProvider theme={theme}>
        {/* <Appbar.Header>
              
              <Appbar.Content title="Saute" alignItems="center"  />
            </Appbar.Header> */}
          <View Style={styles.container}>
        <Text style={styles.headerText}>Your Profile</Text>
    </View>
    <View style={styles.container}>
    <Text style={styles.headerText}>HELLO KRUMINATOR3000,</Text>
    <Image style={styles.imageStyle} source={require('../assets/images/imgs/profileimage.png')} />
    <Text>  Choose your level of expertise: {selectedValue}</Text>
    <Picker 
    style={{height: 50, width: 500, flex: 1}}
    selectedValue={selectedValue}
    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
      <Picker.Item label="Learning to cook" value="Learning to cook"/>
      <Picker.Item label="Knows what a pot is" value="Knows what a pot is"/>
      <Picker.Item label="Home Cook" value="Home Cook"/>
      <Picker.Item label="Chef" value="Chef"/>
      <Picker.Item label="Master Chef" value="Master Chef"/>
    </Picker>
    <View style={{marginTop: 140, flex: 1}}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
              marginHorizontal: 24,
            }}>
    <Text style={styles.text}>Recipes Made</Text>
    <TouchableOpacity>
              <Text style={{color: '#000000'}}>View All</Text>
            </TouchableOpacity>
    </View>
    <View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
              marginHorizontal: 9,
            }}>
            </View>
            {renderRecommended()}
            </View>
    </View> 
    </View>         
    </PaperProvider>
    </ScrollView>
      </SafeAreaView>
    )
  };

  export default ProfileScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    scrollView: {
      backgroundColor: 'pink',
      marginBottom: 20
    },
    headerText: {
      fontSize: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    imageStyle: {
      marginTop:19,
      height:188,
      width:188,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      marginLeft:'auto',
      marginRight:'auto',
    },
    text: {
      fontSize: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  });