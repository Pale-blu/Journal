import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
});

export default TodoScreen;
