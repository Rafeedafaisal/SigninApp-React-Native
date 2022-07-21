import { StyleSheet, View ,TextInput,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton ,Text} from 'react-native-paper';
import { useState } from 'react';

export default function Home({navigation,route}) {
  const [place,setplace]=useState(" ")
  const [age, setage] = useState();
  const [gender, setgender] = useState();
  navigation.setOptions({title:route.params.name})

  const submitbutton=()=>{
    //navigate to Details screen with params
    navigation.navigate("Details",{
      place: place,
      gender:gender,
      age:age,
      name:route.params.name,//data is inside the route.params
    })
  }
  return (
    

  <View style={styles.container}>
      <View style={styles.plc}>
        <Text style={styles.place}>Place</Text>
        <TextInput
          style={styles.input}
          value={place} 
          onChangeText={(text)=>setplace(text)}
        />
       
      </View>
      <View style={styles.age}>
        <Picker
             style={styles.pick}
             mode="dropdown"
             dropdownIconColor="#006C45"
             selectedValue={age}
             onValueChange={(itemValue, itemIndex) =>
               setage(itemValue)
             }>
             <Picker.Item label="Age Group" value="" />
             <Picker.Item label="0-18" value="0-18" />
             <Picker.Item label="18-25" value="18-25" />
             <Picker.Item label="25-40" value="25-40" />
             <Picker.Item label="40-55" value="40-55" />
             <Picker.Item label="55+" value="55+" />
        </Picker>
        
      </View>
      <View style={styles.gender}>
          <Text style={styles.gen}>Gender</Text>
            <RadioButton.Group onValueChange={newValue => setgender(newValue)} value={gender} >
              <View style={styles.radio}>
                 <View style={styles.radio}>
                    <RadioButton value="Female" color="#006C45" uncheckedColor="#006C45"/>
                    <Text style={styles.rtxt}>Female</Text>
                  </View>
                  <View  style={styles.radio}>
                    <RadioButton  value="Male" color="#006C45" uncheckedColor="#006C45"/>
                    <Text style={styles.rtxt}>Male</Text>
                  </View>
                  <View style={styles.radio}>
                    <RadioButton value="Others" color="#006C45" uncheckedColor="#006C45"/>
                    <Text style={styles.rtxt}>Others</Text>
                  </View>
                  <View style={styles.radio}>
                    <RadioButton value="Undeclared" color="#006C45" uncheckedColor="#006C45"/>
                    <Text style={styles.rtxt}>Undisclosed</Text>
                  </View>
               </View>
            </RadioButton.Group>
      </View>
      <View style={styles.submitview}>
        <TouchableOpacity
           style={styles.submit}
           >
        <Text style={styles.submitext} onPress={submitbutton}>Submit</Text>
        </TouchableOpacity>
     </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FFF6',
  },
  input:{
    height: 60,
   width:300,
    borderWidth: 1,
    padding: 10,
    borderColor:"#006C45",
     backgroundColor:'white',
  
  },
  plc:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100,
    textAlign: 'right',
   
  },
  place:{
    color: '#006C45',
    marginRight:260,
    fontWeight:'900',
   marginBottom:10
  },
  pick:{
    width:'100%',
    fontWeight:'900',
    color:'#006C45' ,
    fontSize:5,
    marginBottom:5,
    backgroundColor:'white',
   
  },

  age:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    borderStyle:'solid',
    borderWidth:1,
    
    borderColor:"#006C45",
    height:60,
    width:300,
    marginLeft:30

  },
  gender:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'auto',
    marginTop:60,
    // width:'100%'
  },
  gen:{
    color: '#006C45',
    fontWeight:'900',
    marginRight:250,
    
    
  },
  radio:{
    flexDirection:'row'
  },
  submitview:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:120
  },
  rtxt:{
    marginTop:8,
    fontSize:12
  }
  ,
  submit:{
     padding:10,
      backgroundColor:'#006C45',
      borderRadius:30,
      width:200,
   
  },
  submitext:{
    color:'white',
    textAlign:'center',
    fontWeight:"500",
    fontSize: 17
  }
 
});
