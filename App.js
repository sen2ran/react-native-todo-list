import React , {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class App extends Component {
  // state = {
  //   text : "Sen2"
  // }
  render(){
    return (
      <View style={{flex: 1}}>
         <View style={{flex: 1, backgroundColor: 'powderblue'}} >
           <Text>Navigation</Text>
         </View>
         <View style={{flex: 5, backgroundColor: 'skyblue'}} />
         <View style={{flex: 1, backgroundColor: 'steelblue'}} >
           <Text>Footer</Text>
             {/* <TextInput
               style={{height: 40}}
               placeholder="Type here to translate!"
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
             /> */}
         </View>
       </View> 
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
