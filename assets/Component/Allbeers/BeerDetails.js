import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native'
import {Link} from "react-router-native"

const BeerDetails = (props) => {
    return ( 
        <View style={styles.container}>
            <Image style={styles.img} source={{uri:props.image_url}}/>
            
            <Text style={styles.text1}>{props.name}</Text>
            <Text style={styles.text2}>{props.tagline}</Text>
            <Text style={styles.text3}>{props.description}</Text>
            
            
        </View>
     );
}
 
export default BeerDetails;

const styles = StyleSheet.create({
img:{
    height:250,
    width:65,
    marginTop:50
   
},
container:{
    flex:1,
   alignItems:"center",
   justifyContent:"space-evenly"
   
},
text1:{
    
    fontSize:30,
},
text2:{
    color:"#FFCA41",
},
text3:{
   width:300, 
},
text4:{
    
}

})