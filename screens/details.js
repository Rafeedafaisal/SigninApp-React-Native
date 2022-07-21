import { StyleSheet, Text, View } from 'react-native';

export default function Details({navigation,route}) {
  navigation.setOptions({title:route.params.name})
  // console.log(route.params.gender);
  return (
    

    <View style={styles.container}>
     
      <View style={styles.view1}>
      <Text style={styles.data}>Gender:</Text>
      <Text style={styles.text}>{route.params.gender}</Text>
      </View>
      <View style={styles.view1}>
      <Text style={styles.data}>Age Group:</Text>
      <Text style={styles.text}>{route.params.age}</Text>
      </View>
       <View style={styles.view1}>
      <Text style={styles.data}>Place:</Text>
      <Text style={styles.text}>{route.params.place}</Text>
      </View>
     
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F3FFF6',
    padding:70
  },
  view1:{
    justifyContent:'space-between',
    flexDirection: 'row',
    marginBottom:90,
    
   
  },
 
  data:{
    color:'#006C45' ,
        fontWeight:'700',
        fontSize:15,
        
  },
  text:{
    // textAlign:'justify',
    fontSize:15,
    
  }
});
