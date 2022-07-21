import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import axios from 'axios';
export default function Login({navigation}) {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const loginbutton=()=>{
    axios.get("https://testlogin.free.beeceptor.com/login").then((response)=>{
      if(response.data.status)
      {
        console.log(response.data.status);
        //navigate to the home screen route with params 
        navigation.navigate("Home",{
        name:username,
        })
      }
    })
  }
  return (
  <View style={styles.mainpage}>
     
    <TextInput
      style={styles.input}
      label="Username"
      selectionColor="#006C45"
      mode='outlined'
      outlineColor="#006C45"
      activeOutlineColor='#006C45'
      onChangeText={text => setusername(text)}
    />
     <TextInput
      style={styles.input}
      label="Password"
      secureTextEntry={true}
      outlineColor="#006C45"
      activeOutlineColor='#006C45'
      mode='outlined'
      onChangeText={text => setpassword(text)}
    />
    <Button
      style={{ marginTop: 80,width:130,borderRadius:50 }}
      color="#006C45"
      mode='contained'
      onPress={ loginbutton }
    >
    
      Login
    </Button>
  </View>
  );
}

const styles = StyleSheet.create({
  mainpage: {
    flex: 1,
    backgroundColor: '#F3FFF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:40,
    width:250,
    marginTop: 15,
    backgroundColor:"#F3FFF6"
  
  }
});
