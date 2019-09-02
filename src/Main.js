import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    StatusBar
} from 'react-native'
import Header from './components/Header/Header';
import Input from './components/TextInput/TextInput';
// import {
//     inputPlaceholder
// } from '../src/utils/Colors'


const headerTitle = "TO DO"

export default class Main extends Component {
    state = {
        inputValue : ""
    }

    newInputValue = value =>{
        this.setState({
            inputValue : value
        })
    }

    
    render(){

        const {
            inputValue
        } = this.state;

        return(
            <View  style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.centered}>
                    <Header title={headerTitle} />
                </View>
                <View style={styles.inputContainer}>
                    <Input 
                        inputValue={inputValue} 
                        onChangeText={this.newInputValue} 
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'coral'
    },
    centered :{
        // flex : 1,
        backgroundColor: '#CC6640',
        alignItems : "center"
    },
    inputContainer :{
        // flex : 5,
        marginTop : 40,
        paddingLeft : 15
    },
})