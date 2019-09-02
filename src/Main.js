import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    StatusBar,
    AsyncStorage,
    ActivityIndicator
} from 'react-native'
import uuid from 'uuid/v1'
import Header from './components/Header/Header';
import Input from './components/TextInput/TextInput';
import List from './components/List/List'
import SubTitle from './components/SubTitle';
import Button from './components/Button/Button';
const headerTitle = "TO DO"

export default class Main extends Component {
    state = {
        inputValue: "",
        allItems: {},
        loadingItems: false,
        isCompleted: false
    }

    componentDidMount = () => {
        this.loadingItemsFn();
    }

    loadingItemsFn = async () => {
        try {
            const allItems = await AsyncStorage.getItem('ToDos');
            this.setState({
                loadingItems: true,
                allItems: JSON.parse(allItems) || {}
            })
        } catch (error) {
            console.log(err);

        }
    }
    onDoneAddItem = () => {
        const {
            inputValue
        } = this.state;
        if (inputValue !== '') {
            this.setState(prevState => {
                const id = uuid();
                const newItemObject = {
                    [id]: {
                        id,
                        isCompleted: false,
                        text: inputValue,
                        createdAt: Date.now()
                    }
                };
                const newState = {
                    ...prevState,
                    inputValue: '',
                    allItems: {
                        ...prevState.allItems,
                        ...newItemObject
                    }
                };
                this.saveItems(newState.allItems);
                return {
                    ...newState
                };
            });
        }
    };
    deleteItem = id => {
        this.setState(prevState => {
            const allItems = prevState.allItems;
            delete allItems[id];
            const newState = {
                ...prevState,
                ...allItems
            };
            this.saveItems(newState.allItems);
            return {
                ...newState
            };
        });
    };
    completeItem = id => {
        this.setState(prevState => {
            const newState = {
                ...prevState,
                allItems: {
                    ...prevState.allItems,
                    [id]: {
                        ...prevState.allItems[id],
                        isCompleted: true
                    }
                }
            };
            this.saveItems(newState.allItems);
            return {
                ...newState
            };
        });
    };
    incompleteItem = id => {
        this.setState(prevState => {
            const newState = {
                ...prevState,
                allItems: {
                    ...prevState.allItems,
                    [id]: {
                        ...prevState.allItems[id],
                        isCompleted: false
                    }
                }
            };
            this.saveItems(newState.allItems);
            return {
                ...newState
            };
        });
    };
    deleteAllItems = async () => {
        try {
            await AsyncStorage.removeItem('ToDos');
            this.setState({
                allItems: {}
            });
        } catch (err) {
            console.log(err);
        }
    };
    saveItems = newItem => {
        const saveItem = AsyncStorage.setItem('To Dos', JSON.stringify(newItem));
    };

    newInputValue = value =>{
        this.setState({
            inputValue : value
        })
    }

    
    render(){

        const {
            inputValue,
            allItems,
            loadingItems
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
                        onDoneAddItem={this.onDoneAddItem}
                    />
                </View>
                <View style={styles.list}>
                    <View style={styles.column}>
                        <SubTitle subtitle={'Recent Notes'} />
                    </View>
                    {
                        loadingItems 
                        ? (
                            <ScrollView contentContainerStyle={styles.scrollableList}>
                                {allListView}
                            </ScrollView>
                        )
                        :  (<ActivityIndicator size="large" color="white" />)
                    }
                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'coral'
    },
    centered: {
        backgroundColor: '#CC6640',
        alignItems: "center"
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15
    },
    list: {
        flex: 1,
        marginTop: 70,
        paddingLeft: 15,
        marginBottom: 10
    },
    scrollableList: {
        marginTop: 15
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    deleteAllButton: {
        marginRight: 40
    }
})