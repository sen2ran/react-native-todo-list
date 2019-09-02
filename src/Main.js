import React, {
    Component
} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar
} from 'react-native'
import Header from './components/Header/Header';
import Input from './components/TextInput/TextInput';
import List from './components/List/List'
// import {
//     inputPlaceholder
// } from '../src/utils/Colors'


const headerTitle = "TO DO"

export default class Main extends Component {
    state = {
        inputValue : "",
        allItems :{}
    }

    newInputValue = value =>{
        this.setState({
            inputValue : value
        })
    }

    
    render(){

        const {
            inputValue,
            allItems
        } = this.state;

        const allListView = Object.values(allItems)
                            .reverse()
                            .map(item => (
                                <List
                                    key={item.id}
                                    {...item}
                                    deleteItem={this.deleteItem}
                                    completeItem={this.completeItem}
                                    incompleteItem={this.incompleteItem}
                                />
                            ))
        

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
                <View style={styles.list}>
                    <ScrollView contentContainerStyle={styles.scrollableList}>
                        {allListView}
                    </ScrollView>
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
        backgroundColor: '#CC6640',
        alignItems : "center"
    },
    inputContainer :{
        marginTop : 40,
        paddingLeft : 15
    },
    list :{
       flex : 1,
       marginTop : 70,
       paddingLeft : 15,
       marginBottom : 10 
    },
    scrollableList :{
        marginTop : 15
    }
})