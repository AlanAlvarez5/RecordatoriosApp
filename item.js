import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default({item}) => (
    <View style={styles.container}>
        <Text style={styles.item}>{item.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        height: 50,
        padding: 15
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})