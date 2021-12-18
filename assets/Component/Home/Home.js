import React from 'react';
import { View,Text,Button,Image,StyleSheet } from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native";
const Home = () => {
    return (
    <View style={styles.container}>
        <View>
        <Image style={styles.img} source={require("../../img/all.png")} />
        {/* <Button title="All Beers"></Button> */}
        <Link to="/allbeers">Hallo</Link>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </Text>
        </View>
        <View>
        <Image style={styles.img} source={require("../../img/random.png")} />
        {/* <Button title="Random Beers"></Button> */}
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </Text>
        </View>
    </View>  );
}
 
export default Home;


const styles = StyleSheet.create({
    img: {
        width:100,
        height:100,
        
    }
    
    })