import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar, Appbar, DefaultTheme , Provider as PaperProvider, List, Modal, Portal , Button, Dialog, Paragraph, RadioButton,} from 'react-native-paper';

// const theme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       background: 'white',
//       primary: '#000000',
//       text: "#000000"
//     },
//   };

  const SettingsScreen = () => {
    const [value, setValue] = useState('first');

    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const showDietaryDialog = () => setVisible(true);

    const hideDietaryDialog = () => setVisible(false);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff"}}>
        <View>
          <Text style={{fontSize: 30, margin: 20}}>Settings</Text>
        </View>
        <PaperProvider >
        <View>
        <Button onPress={showDialog} color={"#000000"} labelStyle={{fontSize: 25}}>Measurement System</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={{fontSize: 25}}>Measurement System</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Pick Your measurement Preference</Paragraph>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection: "row"}}>
                  <RadioButton value = "US"/>
                  <Text style={{marginTop: 10}}>US Only</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  
                  <RadioButton value = "metric"/>
                  <Text style={{marginTop: 10}}>Metric</Text>
                </View>
        </RadioButton.Group>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>

      <View style={{justifyContent: 'flex-start'}}>
        <Button onPress={showDietaryDialog} color={"#000000"} labelStyle={{fontSize: 25}}>Dietary Restrictions</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDietaryDialog}>
            <Dialog.Title style={{fontSize: 25}}>Dietary Restrictions</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Pick Your Dietary Restrictions</Paragraph>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{flexDirection: "row"}}>
                  <RadioButton value = "none"/>
                  <Text style={{marginTop: 10}}>None</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  <RadioButton value = "vegetarian"/>
                  <Text style={{marginTop: 10}}>Vegetarian</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  <RadioButton value = "vegan"/>
                  <Text style={{marginTop: 10}}>Vegan</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                  <RadioButton value = "latose intolerant"/>
                  <Text style={{marginTop: 10}}>Lactose Intolerant</Text>
                </View>
        </RadioButton.Group>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDietaryDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    
    </PaperProvider>
      </SafeAreaView>
    )
  }


  export default SettingsScreen;

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