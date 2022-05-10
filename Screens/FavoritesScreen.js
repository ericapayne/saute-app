import React from 'react';
import data from "../constants/data";
import { View, StyleSheet, SafeAreaView, FlatList, Text,  Image, TouchableOpacity } from 'react-native';
import { Appbar, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import icons from '../constants/icons';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      primary: '#ffffff',
    },
  };

function FavoritesScreen() {
    const Header = () => {
        return (
          <View >
    
            <Text style={styles.headerText}> My Favorites </Text>
    
          </View>
        );
      }
    
    
    
    
      const RecipeCardDetails = ({ recipeItem }) => {
        return (
          <View
            style={{
              flex: 1,
              
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  width: "80%",
                  color: "#000000",
    
                  fontSize: 16,
                }}
              >
                {recipeItem.name}
              </Text>
              <Image
                source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 8,
                  tintColor: "#000000",
                }}
              />
            </View>
    
            <Text
              style={{
    
              }}
            >
              {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>
          </View>
        );
      };
    
    
    
    
      const RecipeCardInfo = ({ recipeItem }) => {
    
        return (
          <View
            style={{
              ...styles.recipeCardContainer,
              backgroundColor: 'rgba(211,211,211, 0.5)',
            }}
          >
            <RecipeCardDetails recipeItem={recipeItem} />
          </View>
        );
    
      };
    
    
      const RecipeGridItem = ({ item }) => {
        return (
          <TouchableOpacity style={styles.gridbox}>
    
            <Image
    
              source={item.image}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%", borderRadius: 12,
              }}
            />
    
    
            <View
              style={{
                position: "absolute",
                top: 20,
                left: 15,
                paddingHorizontal: 12,
                paddingVertical: 5,
                backgroundColor: 'rgba(77,77,77, 0.8)',
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
    
                }}
              >
                {item.category}
              </Text>
    
            </View>
    
            <RecipeCardInfo recipeItem={item} />
          </TouchableOpacity>
    
        )
      }
    
    
    
    
    
      return (
        <SafeAreaView style={styles.MainContainer}>
          <PaperProvider theme={theme}>
            {/* <Appbar.Header>
    
              <Appbar.Content title="Saute" alignItems="center" />
            </Appbar.Header> */}
    
            <Header />
            <View style={styles.FavContainer}>
              <FlatList
                data={data.favoriteRecipes}
                renderItem={RecipeGridItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
              />
            </View>
    
          </PaperProvider>
        </SafeAreaView>
      );
    }

    export default FavoritesScreen;
    
    const styles = StyleSheet.create({
    
      MainContainer: {
        flex: 1,
        backgroundColor: 'white',
       
    
      },
      FavContainer: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20,
        paddingBottom: 200,
        height:'100%',
      },
      gridbox: {
        flex: 1,
        height: 250,
        width: "50%",
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 12,
    
    
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      gridText: {
        fontSize: 24,
        color: 'white'
      },
      headerText: {
        fontSize: 30,
        marginLeft: 15,
        marginTop: 25,
    
      }, recipeCardContainer: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 12,
      },
    });