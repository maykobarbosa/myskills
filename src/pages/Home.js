import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform, 
  TouchableOpacity 
} from 'react-native';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill(){
    setMySkills(oldState => [... oldState, newSkill])
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome, Mayko</Text>
        <TextInput 
          style={styles.input} 
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <TouchableOpacity   
          style={styles.button} 
          activeOpacity={.7}
          onPress={handleAddNewSkill}  
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skills
        </Text>
        {
          mySkills.map(skill => (
            <TouchableOpacity key={skill} style={styles.buttonSkill} activeOpacity={.7}>
            <Text style={styles.textSkill}>
              {mySkills}
            </Text>
            </TouchableOpacity>   
          ))
        }
    </View>
 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 24,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
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
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    marginTop: 10,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center'
  },
  textSkill: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
});
