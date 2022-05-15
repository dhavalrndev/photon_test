import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity ,Alert} from 'react-native';
import styles from './style';
import HomeCellView from '../../Component/CellViews/HomeCellView'
import { GetBaseUrl, GetHomeUrl } from '../../Api/Webservices'
import { onCallget } from '../../Api/Webservices/ApiHelper'
import Loader from '../../Component/Loader'
const Index = (navigation, route, props) => {

    //  Declare State here
    const [VisibleLoader, setVisibleLoader] = useState(false);
    const [Data, setData] = useState([]);


    useEffect(() => {

        onCallApi();
    }, [])
    const onCallApi = () => {
        const url=GetBaseUrl() + GetHomeUrl();
        setVisibleLoader(true)
        onCallget(url, (response) => {
            setVisibleLoader(false);
            // console.log("response",JSON.parse(response.data))
            if(response.success)
            {
                // console.log("response?.data ",response?.data.length)
                // console.log("response?.data ",response?.data[0])
                setData(response?.data)
            }else{
                setData([])
                Alert.alert(
                    "My Task",
                    "Opps Some thing is wrong",
                    [                      
                      { text: "OK", onPress: () => {}}
                    ]
                  )
            }
        })

    }
    return (
        <View style={styles.MainView}>
            {
                VisibleLoader == false  && Data?.length>0 &&
                <FlatList
                initialNumToRender={30}
                maxToRenderPerBatch={50}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                     style={{flex:1,backgroundColor:"white"}}
                    keyExtractor={( item, index ) => {
                        return index.toString();
                    }}
                    extraData={Data}
                    renderItem={({item, index}) => {
                     return (
                        <HomeCellView 
                        onClick={()=>{
                            
                        }}
                        item={item}>
                        </HomeCellView>
                     )
                    }}
                    data={Data}>
                </FlatList>
            }

            
              <Loader visible={VisibleLoader}></Loader>
        </View>
    )
}

export default Index;