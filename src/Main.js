import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native'
import Header from './components/Header/Header';

export default class Main extends Component {
    
    render(){
        return(
            <View  style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.centered}>
                    <Header title="To Do" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: 'powderblue'
    },
    centered :{
        alignItems : "center"
    }
})