import React from "react"
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export function Button({title, ...rest } : ButtonProps){
  return(
      <TouchableOpacity   
        style={styles.button} 
        activeOpacity={.7}
        {...rest} 
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E64FE',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    borderRadius: 7
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }
})