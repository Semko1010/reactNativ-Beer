import React from 'react';
import { View,Component } from 'react-native'
import { useParams } from "react-router-native";
import DetailsFetch from "./DetailsFetch"

const Id = () => {
let {id}=useParams()
console.log(id);
    
return (
    <View>
    <DetailsFetch
        id={id}
/> 
</View>);
}
 
export default Id;