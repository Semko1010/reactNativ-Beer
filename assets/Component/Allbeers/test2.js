import React, { Component } from 'react'
import Test from './Name'
import { View,Text,ScrollView,StyleSheet } from 'react-native'
class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
    }


    componentDidMount(){
        fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then ((response) => response.json())
        .then((json) => {
      
          this.setState({
            data:json,
            
          });
          console.log(json);
        })
      }


    render() { 
        return ( 
        <ScrollView style={styles.container}>
            {this.state.data.map(e =>
                <Test
                image_url={e.image_url}
                name={e.name}
                tagline={e.tagline}
                contributed_by={e.contributed_by}
                
                
                />
                
                )}

        </ScrollView> );
    }
}
 
export default Test2;

const styles = StyleSheet.create({
container: {
    
    
}

})

