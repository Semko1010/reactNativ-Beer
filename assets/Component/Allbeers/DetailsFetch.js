import React, { Component }from 'react';
import { View,Text,StyleSheet} from 'react-native'
import BeerDetails from "./BeerDetails"
import {Link} from "react-router-native"
class DetailsFetch extends Component {
    constructor(props) {
        super(props);
        this.state = { details:[] }
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.id}`)
        .then ((response) => response.json())
        .then((json) => {
      
          this.setState({
            details:json
            
          });
          console.log(json);
        })
      }

    render() { 
        return ( 
            <View>
            <BeerDetails
            name={this.state.details.name}
            image_url={this.state.details.image_url}
            tagline={this.state.details.tagline}
            description={this.state.details.description}
            />
            <View style={styles.link}>
            <Link to="/">
                <Text style={styles.text}>HOME</Text>
            </Link>
            </View>
            </View>
         );
    }
}
 
export default DetailsFetch;

const styles = StyleSheet.create({
link:{
backgroundColor:"#FFCA41",
height:50,
width:375,
},
text:{
    textAlign:"center",
    fontSize:20,
    paddingTop:10
}
})