/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import Wishes from './src/wishes';
import TextInput from './src/text-input';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [wishes, setWishes] = useState([])

  const addNewWish = wish => {
      console.log(wish)
      setWishes(prevState => ([ ...prevState, wish ]))
  }

  console.log(wishes);

  return (
      <NavigationContainer>
          <View style={styles.mainScreen}>
            <View>
              <Text style={styles.title}>Your Wish List</Text>
            </View>
            <TextInput
                handleAdd={addNewWish}
            />
            <Wishes wishes={wishes} />
          </View>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: Colors.dark,
    color: Colors.white,
    flex: 1,
  },
  title: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 32,
    fontWeight: "700",
    color: Colors.white,
  }
})

export default App
