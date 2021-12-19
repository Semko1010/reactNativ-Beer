import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native'
import { Link } from "react-router-native";
const Home = () => {
    return (
    <View style={styles.container}>
        <View>
        <Image style={styles.img} source={require("../../img/all.png")} />
        
        <View style={styles.btn}>
        <Link to="/allbeers">
        <Text style={styles.text2}>All Beers</Text>
        </Link>
        </View>
        <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </Text>
        </View>
        <View>
        <Image style={styles.img} source={require("../../img/random.png")} />
        <View style={styles.btn}>
        <Link to="/allbeers">
        <Text style={styles.text2}>Random Beers</Text>
        </Link>
        </View>
        <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </Text>
        
        </View>
    </View>  );
}
 
export default Home;


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
      
    },
    img: {
        width:250,
        height:150,
        borderTopRightRadius:20
        },
        
        btn:{
            width:250,
            height:40,
            paddingTop:10,
            textAlign: 'center',
            backgroundColor:"#FFCA41",
            borderBottomLeftRadius:20,
        },
        text1:{
            width: 250,
            marginTop:10,
            textAlign: 'center'
        },
        text2:{
            textAlign: 'center',
            fontSize:18,
            color: 'white'
        }
    
    })