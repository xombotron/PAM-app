import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Alert 
} from 'react-native';

export default function Index() {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() === '') return;
    
    Alert.alert('Saved to Memory', `You submitted: "${text}"`);
    setText(''); 
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.greeting}>
          Hello user, welcome to your personal memory companion.
        </Text>

        <View style={styles.formRow}>
          <TextInput
            style={styles.input}
            placeholder="Type something to remember..."
            placeholderTextColor="#666"
            value={text}
            onChangeText={setText}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    maxWidth: 450,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 30,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 24, 
    marginRight: 10,
  },
  button: {
    height: 48,
    backgroundColor: '#ffffff', 
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24, 
  },
  buttonText: {
    color: '#121212',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
