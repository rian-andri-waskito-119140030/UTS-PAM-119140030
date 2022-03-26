import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'

const PILIHAN = ['Dewasa'];

const Tipe = (props) => {
    const onPressTipe = (pilih) => {
        props.gantitipe(false);
        props.pilihData(pilih);
    }

    const pilihan = PILIHAN.map((barang, iterasi) =>{
        return(
            <TouchableOpacity
                style={styles.pilihan}
                key={iterasi}
                onPress={()=> onPressTipe(barang)}
            >
                <Text style={styles.kata}>{barang}</Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
            onPress={()=> props.gantitipe(false)}
            style={styles.utama}
        >
            <View style={styles.kata2}>
                <ScrollView>
                    {pilihan}
                </ScrollView>
            </View>
            
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    kata:{
        margin:10,
        marginLeft:15,
        fontSize:15
    },
    pilihan:{
        alignItems: 'flex-start'
    },
    utama:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    kata2:{
        backgroundColor: '#b5b5b5',
        borderRadius: 10,
        width: '70%'
    }
})

export default Tipe