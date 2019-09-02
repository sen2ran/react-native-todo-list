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

const headerTitle = "TO DO"

export default class Main extends Component {
    
    render(){
        return(
            <View  style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.centered}>
                    <Header title={headerTitle} />
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