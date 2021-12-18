import React, { Component } from 'react'
import Test2 from './assets/Component/Allbeers/test2'
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './assets/Component/Home/Home'
import { NativeRouter, Route, Link,Routes} from "react-router-native";

class App extends Component {
 





  render() { 
    


    return ( 
    
    
    <NativeRouter>
    <View style={styles.container}>
      <Routes>

        <Route exact path="/" component={Home}/>
      </Routes>

      
 
    </View> 
    </NativeRouter>
      
      );
      
    
  }
}
 
export default App;

// const App = () => (
//   <NativeRouter>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Home</Text>
//         </Link>
//         <Link
//           to="/about"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}
//         >
//           <Text>About</Text>
//         </Link>
//         <Link
//           to="/topics"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}
//         >
//           <Text>Topics</Text>
//         </Link>
//       </View>

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </View>
//   </NativeRouter>
// );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
