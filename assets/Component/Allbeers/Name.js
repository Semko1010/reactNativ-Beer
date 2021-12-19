import React from 'react';
import { View,Text,Image,StyleSheet} from 'react-native'
import {Link} from "react-router-native"
const Test = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.container1}>
        <Text style={styles.text1}>{props.name}</Text>
        <Text style={styles.text2}>{props.tagline}</Text>
        <Text style={styles.text3}>{props.contributed_by}</Text>
        <View style={styles.Button}>
        <Link to={`/details/${props.id}`}>
            <Text style={styles.text4}>Details</Text>
        </Link>
        </View>
        </View>
        <Image style={styles.Image} source={{uri:props.image_url}}/>
       
    </View>  );
}
 
export default Test;

const styles = StyleSheet.create({
   Image:{
    height:150,
    width:40,
    
    },
    container:{
        paddingTop:30,
        justifyContent:"space-evenly",
        flexDirection: 'row-reverse',
        marginTop:20,
        borderBottomWidth:1
    },
    Button:{
        backgroundColor:"#FFCA41",
        borderRadius:20,
        marginTop:30,
        marginBottom:10,
        height:40,
        paddingLeft:65,
        paddingTop:7,
        
    },
    container1:{
        width:"80%",
        paddingLeft:80
    },
    text1:{
        fontSize:22
    },
    text2:{
       color:"#FFCA41",
       fontSize:18
    },
    text3:{
       
    },
    text4:{
        color: "white",
        fontSize:20
    },

    
  });
  