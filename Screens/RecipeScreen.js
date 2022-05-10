import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List } from 'react-native-paper';
import data from "../constants/data";
import images from "../constants/images";
import icons from "../constants/icons";


const RecipeScreen = ({navigation, route}) => {
    const [selectedRecipe, setSelectedRecipe] = useState('');
    
    useEffect(() => {
        let { recipe } = route.params;
        setSelectedRecipe(recipe);
    }, []);

    // const Recipe = ({ recipeItem }) => {
    //     return (
    //         <View>
    //             <Text>{recipeItem.name}</Text>
    //             <Image 
    //             source={recipeItem.image}
    //             style={{
    //                 width: 300, 
    //                 height:300, 
    //                 justifyContent:"center"}}  />

    //         <Image
    //         source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
    //         style={{
    //           width: 20,
    //           height: 20,
    //           marginRight: 8,
    //           tintColor: "#000000",
    //         }}
    //       />
    //       <Text
    //       style={{
            
    //       }}
    //     >
    //       {recipeItem.duration} | {recipeItem.serving} Serving
    //     </Text>
    //         </View>
            
    //     )
    // }
    function renderRecipe() {
        return (
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize: 22, lineHeight: 30,}}>{selectedRecipe.name}</Text>
                <Image 
                source={selectedRecipe.image}
                style={{
                    width: 300, 
                    height:300, 
                    justifyContent:"center",
                    borderRadius: 150}}  />
                <Text></Text>
                <View style={{
                    flexDirection: 'row',
                    
                }}>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 35,
                        width: 35,
                        marginHorizontal: 50
                    }}
                >
                    <Image
                        source={
                        selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
                        }
                        style={{
                        width: 30,
                        height: 30,
                        tintColor: "#229879",
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                 style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    width: 35,
                }}><Ionicons name='share-social-outline' size={35}></Ionicons></TouchableOpacity></View>
                <View style={{flex: 1,flexDirection: "row",justifyContent: 'center'}}>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardText}>{selectedRecipe.serving} Serving(s)</Text>
                    </View>
                    <View style={styles.infoCard2}>
                        <Text style={styles.infoCardText}>{selectedRecipe.duration}</Text>
                    </View>
                    <View style={styles.infoCard3}>
                        <Text style={styles.infoCardText}>Easy</Text>
                    </View>
                    
            
                </View>
                <View style={{marginBottom: 10}}>
                        <Text style={{fontSize: 30, marginLeft: 20, fontWeight: "bold"}}>
                        Ingredients
                    </Text>
                    </View>
            </View>
        )
    };

    // function renderInstructions() {
    //     return (
    //         <View>
    //         <FlatList
    //                     data={}
    //                     keyExtractor={(step) => `${step.id}`}
    //                     renderItem= {({ step }) => (
    //                         <View
    //                         style={{
    //                         flexDirection: "row",
    //                         paddingHorizontal: 30,
    //                         marginVertical: 5,
    //                         }}>
    //                             <Text>{step.name}</Text>
    //                         </View>
                                
    //                         )}
    //                 />
    //                 </View>
    //     )
    // };

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: "#ffffff"}}>
            {/* <ScrollView style={{backgroundColor: "#ffffff"}}> */}
            <View>
                
                    <FlatList
                    data={selectedRecipe.ingredients}
                    keyExtractor={(item) => `${item.id}`}
                    ListHeaderComponent={
                        <View>
                            {renderRecipe()}
                            
                        </View>
                    }
                    renderItem= {({ item }) => (
                        <View
                        style={{
                        flexDirection: "row",
                        paddingHorizontal: 30,
                        marginVertical: 5,
                        }}>
                            <View style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 50,
                                width: 50,
                                borderRadius: 5,
                                backgroundColor: "#F5F6FB",
                            }}>
                            <Image
                            source={item.icon}
                            style={{width: 40, height:40}}/>
                            
                            </View>
                            <View style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: "center",
                            }}>
                                <Text style={{fontSize: 16}}> {item.description}</Text>
                            
                            </View>
                            <View style={{
                                alignItems: "flex-end",
                                justifyContent: "center",
                            }}>
                                <Text style={{fontSize: 16}}> {item.quantity}</Text>
                            </View>
                        </View>
                    )}
                    />
                    
                    {/* {renderInstructions()} */}
                </View>
                
                
                {/* <View style={{alignItems:"center"}}>
                    <Text style={{fontSize: 30}}>Grilled Cheese</Text>
                    <Image style={{width: 300, height:300, justifyContent:"center"}} source={require('../assets/images/recipes/gc.jpg')} />
                </View>
                
                <View style={{flex: 1,flexDirection: "row",justifyContent: 'center'}}>
                <View style={styles.infoCard}>
               <Text style={styles.infoCardText}>1 Serving</Text>
            </View>
            <View style={styles.infoCard2}>
               <Text style={styles.infoCardText}>10 Mins</Text>
            </View>
            <View style={styles.infoCard3}>
               <Text style={styles.infoCardText}>Easy</Text>
            </View>
            
            </View>
            <View>
                    <Text style={{fontSize: 30, marginLeft: 20, fontWeight: "bold"}}>
                        Ingredients
                    </Text>
                    
                </View>
                <View>
                    <Text style={styles.ingredientText}>2 Pieces Sourdough Bread</Text>
                    <Text style={styles.ingredientText}>1 ½ tablespoons unsalted butter</Text>
                    <Text style={styles.ingredientText}>1 ½ tablespoons mayonnaise</Text>
                    <Text style={styles.ingredientText}>3 slices cheddar cheese</Text>
                </View>
                <View style={{margin:20}}>
                    <Text style={{fontSize: 30, marginLeft: 20, fontWeight: "bold"}}>Steps</Text>
                    
                        <Text style={styles.stepsText}>1. On a cutting board, butter each piece of bread with butter on one side.</Text>

<Text style={styles.stepsText}>2. Flip the bread over and spread each piece of bread with mayonnaise.</Text>

<Text style={styles.stepsText}>3.Place the cheese on the buttered side of one piece of bread. Top it with the second piece of bread, mayonnaise side out.</Text>
<Text style={styles.stepsText}>4.Heat a nonstick pan over medium low heat.</Text>
<Text style={styles.stepsText}>5.Place the sandwich on the pan, mayonnaise side down.
Cook for 3-4 minutes, until golden brown.</Text>
<Text style={styles.stepsText}>6.Using a spatula, flip the sandwich over and continue cooking until golden brown, about 2-3 minutes.</Text>
<Text style={styles.stepsText}>7.Enjoy! </Text>
                </View> */}
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default RecipeScreen;

const styles = StyleSheet.create({
    infoCard: {
        width: 90,
        height: 90,
        backgroundColor: "#ffabab",
        padding: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    infoCard2: {
        width: 90,
        height: 90,
        backgroundColor: "#a79aff",
        padding: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    infoCard3: {
        width: 90,
        height: 90,
        backgroundColor: "#9bd0b7",
        padding: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20,
        
    },
    infoCardText: {
        textAlign: 'center', 
        color: "#fff", 
        fontSize: 20,
        fontWeight: 'bold'
    },
    ingredientText: {
        fontSize: 20,
        textAlign: "center",
    },
    stepsText: {
        fontSize: 20,
        margin: 5,
    }
});