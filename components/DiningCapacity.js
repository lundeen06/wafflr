import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray, // Ensure this color is defined in your Colors object
    width: 165,
    height: 150,
    borderRadius: 30,
  },
});

export const DiningCapacity = () => {
  return (
    
    <TouchableOpacity onPress={() => console.log('capacity info pressed')}>
        <View style={styles.container}>

        </View>
    </TouchableOpacity>
   
  );
};