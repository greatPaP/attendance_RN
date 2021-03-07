import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function AddSchedule() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>🧐Attendance</Text>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "black",
        fontSize: 30
    }
});