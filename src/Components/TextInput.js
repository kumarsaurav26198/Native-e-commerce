import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { Component } from 'react';

class TextInputComponent extends Component {
  render() {
    const { placeholder, updateFields } = this.props;
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={text => updateFields(text)}
          placeholderTextColor='#000'
          secureTextEntry={placeholder == "Enter Password" ? true : false}
        />
      </View>
    );
  }
}

export default TextInputComponent;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 50,
    height: 50,
    width: "85%",
    marginBottom: 40

  },
  textInput: {
    paddingHorizontal: 10,
    width: '90%',
    paddingVertical: 0,
    color: '#000',
    fontSize: 17,
  },
});