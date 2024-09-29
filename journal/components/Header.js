import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Calendar icon

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="calendar-outline" size={24} color="white" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#121212',
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    icon: {
        color: 'white',
    },
});
