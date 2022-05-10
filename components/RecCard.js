import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import icons  from '../constants/icons';
import images  from '../constants/images';
import { BlurView }  from "@react-native-community/blur";

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
              width: "90%",
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
            backgroundColor: 'rgba(211,211,211, 0.6)',
          }}
        >
          <RecipeCardDetails recipeItem={recipeItem} />
        </View>
      );
    
  };

const RecommendCard = ({ containerStyle, recipeItem, onPress }) => {
    return (
        <TouchableOpacity
            style = {{
                height: 350,
                width: 250,
                marginTop: 12,
                marginRight: 20,
                borderRadius: 12,
                ...containerStyle,
            }}
            onPress={onPress}
        >
            <Image
            source ={recipeItem.image}
            resizeMode= "cover"
            style={{
                width: 250,
                height: 350,
                borderRadius: 12,
            }}
            />
            <View
        style={{
          position: "absolute",
          top: 20,
          left: 15,
          paddingHorizontal: 12,
          paddingVertical: 5,
          backgroundColor: 'rgba(77,77,77, 0.5)',
          borderRadius: 12,
        }}
      >
          <Text
          style={{
            color: '#ffffff',
            
          }}
        >
          {recipeItem.category}
        </Text>

      </View>
      <RecipeCardInfo recipeItem={recipeItem} />
        </TouchableOpacity>
    )
};

export default RecommendCard;

const styles = StyleSheet.create({
    recipeCardContainer: {
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