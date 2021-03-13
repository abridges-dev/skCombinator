import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

function _Submit() {
  
};

function _Clear() {
  
};

type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          skCombinator!
        </Text>
        <Text style={styles.instructions}>
          reduces to fixed point(if possible)
          {"\n"}all steps shown
          {"\n"}Enter sk program to evaluate i.e. sks(k(kks(ks)))
        </Text>
        <TextInput 
        style={styles.input}
        placeholder="Enter your Input here..."
        placeholderTextColor="black"
        maxlength={100}
        spellcheck={false}
        nSubmitEnding={_Submit()}
        />
                <ScrollView>
        <TextInput
        style={styles.output}
        multiline={true}
        numberOfLines={1000}
        editable={false}
       />
       </ScrollView>
        <Button
        style={styles.submit}
        title="Submit"
        onpress={_Submit()}
        
        />
        <Button
        style={styles.clear}
        title="Clear"
        onpress={_Clear()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    },
   title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
    
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
    marginBottom: 5,
  },
  input: {
    height: 30,
    backgroundColor: 'grey',
    borderColor: 'darkcyan',
    borderWidth: 2,
    borderBottomWidth: 0,
    opacity: .8,
    fontweight: 'bold'
  },
  submit: {
    backgroundColor: 'darkcyan'
  },
  clear: {
    
  },
  output: {
    backgroundColor: 'grey',
    borderColor: 'darkcyan',
    borderWidth: 2,
    opacity: .8,
    height: 400,
  }
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'skCombinator', () => MyApp
);
