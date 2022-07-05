import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
    
  const [ valueA, setValueA ] = useState(0);
  const [ valueB, setValueB ] = useState(0);
  const [ result, setResult ] = useState(0);

  // calculator algorythms
  const handleSum = () => {
    setResult(valueA + valueB);
  };

  const handleSubstraction = () => {
    setResult(valueA - valueB);
  };

  const handleMultiple = () => {
    setResult(valueA * valueB);
  };

  const handleModulo = () => {
    setResult(valueA % valueB);
  };

  const handleDivision = () => {
    setResult(valueA / valueB);
  };

  const handleClear = () => {
    setResult(0);
    setValueA(0);
    setValueB(0);
  };

  return (
    <View style={styles.container}>

      {/* input area */}
      <View style={styles.main}>
        <Text style={styles.textValue}>Value A</Text>
        <TextInput 
        style={styles.textInput} 
        keyboardType='numeric'
        value={valueA} 
        onChangeText={(text) => setValueA(Number(text))}/>

        <Text style={styles.textValue}>Value B</Text>
        <TextInput 
        style={styles.textInput}
        keyboardType='numeric' 
        value={valueB}
        onChangeText={(text) => setValueB(Number(text))} />
      </View>

      {/* button area top*/}
      <View style={styles.buttonArea} >
        <TouchableOpacity style={styles.touchAble} onPress={handleSum} >
          <Text style={styles.buttons}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchAble} onPress={handleSubstraction}>
          <Text style={styles.buttons}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchAble} onPress={handleMultiple}>
          <Text style={styles.buttons}>x</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchAble} onPress={handleDivision}>
          <Text style={styles.buttons}>/</Text>
        </TouchableOpacity>
      </View>

      {/* button are bottom */}
      <View style={styles.buttonArea}>
      <TouchableOpacity style={styles.touchAble} onPress={handleModulo}>
          <Text style={styles.buttons}>%</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.touchAble} onPress={handleClear}>
          <Text style={styles.buttons}>C</Text>
        </TouchableOpacity>
      </View>

      {/* result */}
      <View style={styles.result}>
        <Text style={styles.textValue}>Result</Text>
      </View>
        <Text style={styles.resultAll}>{result}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8B8B', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  main: {
    // border: '1px solid',
    width: '300px',
    height: '200px',
    padding: 10
  },

  result: {
    // border: '1px solid',
    width: '300px',
    height: '50px',
    padding: 10,
    textAlign: 'center'
  },

  textInput: {
    // border: '1px solid',
    marginTop: '30px',
    height: '40px',
    padding: 10,
    backgroundColor: '#ffff',
    borderRadius: 8
  },

  textValue: {
    fontWeight: '700',
    position: 'relative',
    top: '10px',
    left: '5px'
  },

  buttonArea: {
    // border: '1px solid',
    marginTop: '20px',
    flexDirection: 'row'
  },

  touchAble: {
    // border: '1px solid green',
    margin: 10,
    backgroundColor: '#FF5757',
    borderRadius: 10
  },

  buttons: {
    width: 50,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'arial'
  },

  resultAll: {
    // border: '1px solid',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: '80%',
    height: 50,
    lineHeight: 50,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 30
  }
});
