import React from 'react';
import { View, ActivityIndicator, Modal, StyleSheet } from 'react-native'
import styles from '../../screens/Home/style';

const index = (props) => {

    return (
        <Modal
            statusBarTranslucent={true}
            transparent={true}
            animationType={'none'}
            supportedOrientations={['portrait', 'landscape']}
            onRequestClose={() => { console.log('close modal') }}
            visible={props.visible != null && props.visible != undefined ? props.visible : false}
            style={style.MainView}>
            <View style={style.modalBackground}>
                <View style={style.activityIndicatorWrapper}>
                    <ActivityIndicator
                        size='large'
                        color='green'
                        animating={true} />
                </View>
            </View>

        </Modal>
    )
}

const style = StyleSheet.create({
    MainView: {
        flex: 1,

    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default index;