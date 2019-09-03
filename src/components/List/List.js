import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import {
    MaterialIcons
} from '@expo/vector-icons';
import {
    itemListText,
    itemListTextStrike,
    circleActive,
    circleInactive,
    deleteIconColor
} from '../../utils/Colors';
const {
    height,
    width
} = Dimensions.get('window');

class List extends Component{

    // componentDidMount= () => { 
    // }
    onToggleCircle = () => {
        const {
            isCompleted,
            id,
            completeItem,
            incompleteItem
        } = this.props;
        if (isCompleted) {
            incompleteItem(id);
        } else {
            completeItem(id);
        }
    }
    
    render(){
        const { text, deleteItem, id, isCompleted } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.coloum}>
                    <TouchableOpacity onPress={this.onToggleCircle}>
                        <View style={[
                                styles.circle,
                                isCompleted 
                                ? {borderColor: circleActive } 
                                : {borderColor: circleInactive }
                            ]}/>
                    </TouchableOpacity>
                    <Text
                        style={[
                            isCompleted 
                            ?{color: itemListTextStrike,textDecorationLine: 'line-through'} 
                            :{color : itemListText}
                        ]}
                    >
                        {text} 
                    </Text>
                </View>
                {
                    isCompleted 
                    ? (
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPressOut={ () => deleteItem(id)}
                            >
                                <MaterialIcons
                                    name="delete-forever"
                                    size={24}
                                    color={deleteIconColor}
                                />
                            </TouchableOpacity>
                        </View>
                        ) 
                    :null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        height: width / 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(50,50,50)',
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: {
                    height: 2,
                    width: 0
                }
            },
            android: {
                elevation: 5
            }
        })
    },
    coloum: {
        flexDirection: "row",
        alignItems: 'center',
        width: width / 1.5
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 15
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        margin: 10
    },
    button: {
        marginRight: 10
    }
})

export default List