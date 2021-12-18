import React from 'react';
import { View,Text,Image,StyleSheet,Button } from 'react-native'
const Test = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.container1}>
        <Text>{props.name}</Text>
        <Text>{props.tagline}</Text>
        <Text>{props.contributed_by}</Text>
        <View style={styles.Button}>
        <Button  title="Details"></Button>
        </View>
        </View>
        <Image style={styles.Image} source={{uri:props.image_url}}/>
       
    </View>  );
}
 
export default Test;

const styles = StyleSheet.create({
   Image:{
    height:150,
    width:50,
    
    },
    container:{
        paddingTop:30,
        justifyContent:"space-evenly",
        flexDirection: 'row-reverse',
        marginTop:20,
        borderBottomWidth:1
    },
    Button:{
        backgroundColor:"yellow",
        borderRadius:20,
        marginTop:30,
        width:100,
        height:40,
    },
    container1:{
        width:"80%",
        paddingLeft:80
        
        
    }
    
  });
  