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
            <Pressable style={{flex:1}} onPress={()=>{
                props?.onClick();
            }}>
            <Text style={styles.TextSchollNameStyle}>
                {Name}
            </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        // width:'100%',
        backgroundColor:'pink',
        height:50,
        justifyContent:'center',
        maxHeight: 50,


     
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 15,
        // shadowColor: "red",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingLeft: 16,

        paddingHorizontal:15,
        paddingVertical:15,
        marginHorizontal:5,
        marginVertical:10
        
        // paddingRight: 14,
        // marginTop: 6,
        // marginBottom: 6,
        // marginLeft: 16,
        // marginRight: 16,
        // marginVertical: 35,
    },
    PressableViewStyle: {
        flex: 1,
    }  , TextSchollNameStyle: {
        fontSize: 16,
        fontWeight:'600',
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'left',
        width:'100%',
        lineHeight: 18,
        color: "black",
    }
})

export default Index;