import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { inNotNull, isNotNull } from '../../../Util';
const Index = (props) => {
    const [Name, setName] = React.useState("")

    useEffect(() => {
        if (isNotNull(props?.item?.school_name) == true) {
            setName(props?.item?.school_name)
        }
    }, [])   

    console.log(" props ", props?.item);
    return (
        <View style={styles.mainView}>
            <Text style={styles.TextSchollNameStyle}>
                {Name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        // flexGrow: 1,
        width:'100%',
        backgroundColor:'pink',
        height:50,
        maxHeight: 50,
        marginVertical: 10,
    },
    PressableViewStyle: {
        flex: 1,
    }  , TextSchollNameStyle: {
        fontSize: 16,
        lineHeight: 18,
        color: "black",
    }
})

export default Index;